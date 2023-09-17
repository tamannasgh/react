import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import {restaurantList, restaurantApi} from "../config";
import Card from "./Card";
import Shimmer from "./shimmer";

function filterRestaurants(searchTxt, data) {
    return data.filter( (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchTxt) 
    );
}

const Body = () => {
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    useEffect(()=>{
        async function getRestaurant(){

            try{
                const req = await fetch(restaurantApi);
                if(!req.ok)throw new Error("something went wrong");
                const data = await req.json();
                // console.log(data);
                const cards = data?.data?.cards;

                cards.map( (card) => {

                    if(card?.card?.card?.id === "top_brands_for_you"){

                        const finalData = card?.card?.card?.gridElements?.infoWithStyle.restaurants;
                        setAllRestaurants(finalData);
                        setFilteredRestaurants(finalData);
                    }
                    
                });

            } catch(error){
                console.log(error.message);
            }

        }
        getRestaurant();

    }, []);


    return (
        (allRestaurants.length < 1) ? <Shimmer count={10} /> :
        <>

            <div className="search-container">
                
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTxt}
                        onChange={(e)=>{
                            setSearchTxt(e.target.value);
                        }}
                    />
                    <button 
                        type="submit"
                        onClick={(e)=>{
                            e.preventDefault();

                            //filter the card list
                            const filteredData = filterRestaurants(searchTxt.toLowerCase(), allRestaurants);
                            //re-render the card list
                            setFilteredRestaurants(filteredData);
                        }}
                    >Search</button>

                </form>

            </div>


            <div className="card-list">

                {
                    (filteredRestaurants.length < 1) ? <h1>Sorry, no restaurant found!</h1> :
                
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            <Card {...restaurant.info}/>
                        </Link>
                    })
                }

            </div>


        </>
    );
}

export default Body;
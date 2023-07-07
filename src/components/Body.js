import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import {restaurantList, restaurantApi} from "../config";
import Card from "./Card";
import Shimmer from "./shimmer";

function filterRestaurants(searchTxt, data) {
    console.log(data);
    return data.filter( (restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchTxt) 
    );
}

const Body = () => {
    
    console.log("render");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 

    useEffect(()=>{
        console.log("useeffects");

        async function getRestaurant(){

            try{
                const req = await fetch(restaurantApi);
                const data = await req.json();
                const cards = data?.data?.cards;

                cards.forEach(element => {
                    if(element.cardType === "seeAllRestaurants") {
                        setAllRestaurants(element?.data?.data?.cards);
                        setFilteredRestaurants(element?.data?.data?.cards);
                    }
                });
                
            } catch(error){
                console.log("no internet connection");
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
                        return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                            <Card {...restaurant.data}/>
                        </Link>
                    })
                }

            </div>


        </>
    );
}

export default Body;
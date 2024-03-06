import {useState} from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./shimmer";
import { filterRestaurants } from "../utils/utils";
import useRestaurant from "../hooks/useRestaurant";


const Body = () => {
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useRestaurant([setAllRestaurants, setFilteredRestaurants]);

    const [searchTxt, setSearchTxt] = useState("");


    return (
        (allRestaurants.length < 1) ? <Shimmer count={10} /> :
        <>

            <div className="m-10">
                
                <form>
                    <input 
                        data-testid="search-input"
                        className="bg-white shadow-md mr-2 p-2 px-5 border rounded-md"
                        type="text" 
                        placeholder="Search..." 
                        value={searchTxt}
                        onChange={(e)=>{
                            setSearchTxt(e.target.value);
                        }}
                    />
                    <button 
                        data-testid="search-btn"
                        className="ml-4 bg-pink-50 p-2 rounded-md border shadow-md"
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


            <div data-testid="res-cards" className=" my-5 flex flex-wrap justify-center">

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
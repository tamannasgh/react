import { useEffect } from "react";
import {restaurantApi} from "../config";

const useRestaurant = ([setAllRestaurants, setFilteredRestaurants]) =>{

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
}

export default useRestaurant;
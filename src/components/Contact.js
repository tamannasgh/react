import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { getRandomNum } from "../utils/utils";

const Contact = () =>{
    const {user, setUser} = useContext(UserContext);

    async function updateUser(id){
        const req = await fetch("https://dummyjson.com/users/" + id);
        const data = await req.json();
        const finalData = {name: data.firstName, email:data.email};
        setUser(finalData);
    }

    return(
        <section className="m-10">
            <h1 className="font-bold text-3xl mb-3">Contact page</h1>
            <h2>{ user.name} -{user.email}</h2>

            <button 
                className="border cursor-pointer bg-pink-50 p-3 m-3 rounded-md"
                onClick={()=>{
                    const randomNum = getRandomNum(1, 100);
                    updateUser(randomNum);
                }}
                >Update User
            </button>

        </section>
    );
}

export default Contact;
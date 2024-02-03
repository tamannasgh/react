import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { githubUserApi } from "../config";

const Profile = (props) => {

    const [userInfo, setUserInfo] = useState({});
    // const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            console.log("hey from profile functional");
        }, 1000);

        async function getUserInfo(username){
            const req  = await fetch(githubUserApi + username);
            const data = await req.json();
            setUserInfo(data);
        }
        getUserInfo(props.name);

        return ()=>{
            console.log("profile functional cleanup");
            clearInterval(interval);
        }
    }, []);

    // useEffect(() => {
    //     alert("count is updating");     //this will first run even before the render and then after whenever count updates
    // }, [count]);

    return ( !(userInfo.name) ? <Shimmer count={1} /> :
        <div className="flex items-center justify-evenly">
            <img 
                src={userInfo.avatar_url} 
                alt="profile image" 
                width="300px"
                className="rounded-full border-4 border-purple-600"
            />

            <div>
                <h2 className="font-bold text-4xl">{userInfo.name}</h2>
                <h3 className="text-lg">{userInfo.bio}</h3>
            </div>
            
            {/* <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count + 1);
            }}>+</button>
            <br></br> */}
        </div>
    )
}

export default Profile;
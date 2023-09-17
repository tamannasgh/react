import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { githubUserApi } from "../config";

const Profile = (props) => {

    const [userInfo, setUserInfo] = useState({});
    const [count, setCount] = useState(0);

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

    useEffect(() => {
        alert("count is updating");
    }, [count]);

    return ( !(userInfo.name) ? <Shimmer count={1} /> :
        <>
            <img src={userInfo.avatar_url} alt="profile image" width="300px"/>
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.bio}</h3>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count + 1);
            }}>+</button>
            <br></br>
        </>
    )
}

export default Profile;
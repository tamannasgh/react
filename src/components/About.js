// import { Outlet } from "react-router-dom";
import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

import UserContext from "../utils/UserContext";

const About = () =>{
    return (
        <>
            <h1>About page</h1>
            {/* <Outlet /> */}
            <Profile name="functional" />
            <ProfileClass name="class" />
        </>
    );

}

class AboutClass extends React.Component {
    
    render() {
        return(
            <section className="m-10">
                <h1 className="font-bold text-2xl m-3">About page</h1>
                <Profile name="tamannasgh" />

                <UserContext.Consumer>
                    {(user)=> (
                        <p>{user.name} - {user.email}</p>
                    )}
                </UserContext.Consumer>

                {/* <ProfileClass name="chmodx1sh" /> */}
            </section>
        )
    }
}

export default AboutClass;
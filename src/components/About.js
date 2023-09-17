// import { Outlet } from "react-router-dom";
import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

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
            <>
                <h1>About page</h1>
                <Profile name="tamannasgh" />
                {/* <ProfileClass name="chmodx1sh" /> */}
            </>
        )
    }
}

export default AboutClass;
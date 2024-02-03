import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { imageCdn } from "../config";

const Card = ({ name, cloudinaryImageId: imageId, cuisines, avgRating }) => {
    const {user, setUser} = useContext(UserContext);
    return (

        <div className="w-72 my-5 mx-5 bg-pink-100 p-2 rounded-md ">
            <img src={imageCdn + imageId} alt="food image" />

            <div className="card-text mt-3">
                <h2 className="font-semibold">{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating} avgRating</h4>
                <p>{user.name} - {user.email}</p>
            </div>
        </div>
    );
}

export default Card;
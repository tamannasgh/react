import { imageCdn } from "../config";

const Card = ({ name, cloudinaryImageId: imageId, cuisines, avgRating }) => {
    return (

        <div className="card">
            <img src={imageCdn + imageId} alt="food image" />

            <div className="card-text">
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{avgRating} avgRating</h4>
            </div>
        </div>
    );
}

export default Card;
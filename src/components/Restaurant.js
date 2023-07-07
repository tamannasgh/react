import { useParams } from "react-router-dom"; 

const Restaurant = () => {
    const {id} = useParams();

    return (
        <h1>ths is restaurant {id}!</h1>
    );
}

export default Restaurant;

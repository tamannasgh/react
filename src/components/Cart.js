import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart);
    const dispatch = useDispatch();
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Cart</h1>
            <button 
                className="bg-pink-50 border shadow-md p-3 rounded-md m-3"
                onClick={()=>{
                    dispatch(clearCart());
                }}
                >clear
            </button>
            {cartItems.map((item, index) => <h1 key={index}>{item}</h1>)}

            <button 
                className="bg-pink-50 border shadow-md p-3 rounded-md m-3"
                onClick={()=> {
                    dispatch(addItem("grapes" + cartItems.length));
                }}
                >add grapes
            </button>
        </div>
    );
}

export default Cart;
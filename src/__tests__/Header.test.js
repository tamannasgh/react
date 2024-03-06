import Header from "../components/Header";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../utils/store"
import {StaticRouter} from "react-router-dom/server"

test("logo should be loaded when header rendered", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = header.getByTestId("logo");
    // console.log(logo.src);

    expect(logo.src).toBe("http://localhost/dummyImage.png");

}) 

test("cart items should be 2 when header rendered", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const cart = header.getByTestId("cart");
    // console.log(cart.textContent);

    expect(cart.textContent).toBe("Cart 2");
}) 
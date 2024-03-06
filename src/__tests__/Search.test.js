import Body from "../components/Body";
import {render, waitFor, fireEvent} from "@testing-library/react";
import {toBeInTheDocument} from "@testing-library/jest-dom"
import {restaurantData} from "../mocks/dummyData"
import {Provider} from "react-redux";
import store from "../utils/store"
import {StaticRouter} from "react-router-dom/server"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json(){
            return Promise.resolve(restaurantData);
        },
        "ok": true
    });
});

test("shimmer should be there", ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    // console.log(shimmer);
    expect(shimmer).toBeInTheDocument();

});

test("restaurant cards should be there", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("res-cards")))
    const resCards = body.getByTestId("res-cards");
    expect(resCards.children.length).toBeGreaterThan(0);
});

test("search for 'food' should make cards length 1", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
   
    await waitFor(() => expect(body.getByTestId("res-cards")));

    const searchInput = body.getByTestId("search-input");
    const searchBtn = body.getByTestId("search-btn");

    fireEvent.change(searchInput, {target : { value : "food"}});
    fireEvent.click(searchBtn);

    const resCards = body.getByTestId("res-cards");
    
    expect(resCards.children.length).toBe(1);

});
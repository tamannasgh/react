import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/ErrorPage";
import Restaurant from "./components/Restaurant";
// import Profile from "./components/Profile";
import useOnline from "./hooks/useOnline";

const BigComponent = lazy(()=>import("./components/BigComponent"));


const App = () => {
    const online = useOnline();
    return online ? (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    ) : <h1>opps! you're offline</h1>;
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                // children: [
                //     {
                //         path: "profile",
                //         element: <Profile />,
                //     }
                // ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:id",
                element: <Restaurant />
            },
            {
                path: "/bigComponent",
                element: <Suspense fallback={<h1>loading...</h1>} >
                    <BigComponent />
                </Suspense>
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);




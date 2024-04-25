import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import Home from "./pages/Home/Home.jsx"
import AllTouristsSpot from "./pages/AllTouristsSpot/AllTouristsSpot.jsx"
import AddTouristsSpot from "./pages/AddTouristsSpot/AddTouristsSpot.jsx"
import MyList from "./pages/MyList/MyList.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
            },
            {
                path: "/add-tourists-spot",
                element: <AddTouristsSpot></AddTouristsSpot>,
            },
            {
                path: "/my-list",
                element: <MyList></MyList>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";
import LoadingSpinner from "../ui/LoadingSpinner";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoadingSpinner><Home></Home></LoadingSpinner>,
                loader: () => fetch('data.json')
            },
            { 
                path: "/bookings", 
                element: <LoadingSpinner><Bookings /></LoadingSpinner>,
            },
            { 
                path: "/blogs", 
                element: <LoadingSpinner><Blogs /></LoadingSpinner>,
            },
        ]
    }
])

export default router;
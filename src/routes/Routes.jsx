import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";
import LoadingSpinner from "../ui/LoadingSpinner";
import LawyerDetails from "../pages/LawyerDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: async () => {
                    try {
                        const response = await fetch('/data.json');
                        if (!response.ok) throw new Error('Failed to fetch data');
                        return response.json();
                    } catch {
                        throw new Error('Failed to load data');
                    }
                },
                hydrateFallbackElement: <LoadingSpinner />
            },
            {
                path: "/bookings",
                element: <Bookings />,
                hydrateFallbackElement: <LoadingSpinner />
            },
            {
                path: "/blogs",
                element: <Blogs />,
                hydrateFallbackElement: <LoadingSpinner />
            },
            {
                path: "/lawyer-details/:license_number",
                element: <LawyerDetails />,
                loader: async () => {
                    try {
                        const response = await fetch('/data.json');
                        if (!response.ok) throw new Error('Failed to fetch data');
                        const data = await response.json();
                        if (!Array.isArray(data)) throw new Error('Invalid data format');
                        return data;
                    } catch {
                        throw new Error('Failed to load lawyer data');
                    }
                },
                hydrateFallbackElement: <LoadingSpinner />
            },
        ]
    }
])

export default router;
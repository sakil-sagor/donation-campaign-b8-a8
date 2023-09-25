import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CardDetails from "../components/CategoryContainer/CardDetails";
import Donation from "../components/Donation/Donation";
import ErroPage from "../components/ErrorPage/ErroPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch("/data.json")
                }

            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: async () => {
                    return fetch("/data.json")
                }

            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: async () => {
                    return fetch("/data.json")
                }

            },
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
                loader: async () => {
                    return fetch('/data.json')
                }

            },
        ]
    },
]);


export default router;
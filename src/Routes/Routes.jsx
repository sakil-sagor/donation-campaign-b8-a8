import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>

            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    },
]);


export default router;
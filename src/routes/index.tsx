import App from "@/App";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/books",
                element: <AllBooks></AllBooks>,
            },
            {
                path: "/create-book",
                element: <AddBooks></AddBooks>,
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary></BorrowSummary>,
            },
        ],
    },
]);

import App from "@/App";
import BookDetails from "@/components/BookDetails";
import AddBooks from "@/pages/AddBooks";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <AllBooks></AllBooks>,
            },
            {
                path: "/books",
                element: <AllBooks></AllBooks>,
            },
            {
                path: "/books/:id",
                element: <BookDetails></BookDetails>,
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

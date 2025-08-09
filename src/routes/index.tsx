import App from "@/App";
import BookDetails from "@/components/BookDetails";
import BorrowBookById from "@/components/BorrowById";
import EditBookById from "@/components/EditBookById";
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
                path: "/edit-book/:id",
                element: <EditBookById></EditBookById>
               
            },
            {
                path: "/create-book",
                element: <AddBooks></AddBooks>,
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary></BorrowSummary>,
            },
            {
                path: "/borrow/:id",
                element: <BorrowBookById></BorrowBookById>,
            },
        ],
    },
]);

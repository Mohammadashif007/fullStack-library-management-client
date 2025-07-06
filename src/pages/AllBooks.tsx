
import BookCard from "@/components/BookCard";
import BookTable from "@/components/BookTable";
import { useGetAllBooksQuery } from "@/redux/api/booksApi";

const AllBooks = () => {
    const { data, isLoading, error } = useGetAllBooksQuery(undefined);
    if (isLoading) return <p className="text-center my-5">Loading...😜</p>;
    if (error)
        return <p className="text-center my-5">Something was wrong...😜</p>;
    const books = data?.data;
    return (
        <div>
            <h1>All books</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    
                    books.map((book) => (
                        <BookCard key={book._id} book={book}></BookCard>
                    ))
                }
            
            </div>
        </div>
    );
};

export default AllBooks;

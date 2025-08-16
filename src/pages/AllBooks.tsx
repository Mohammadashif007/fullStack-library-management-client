import { useGetAllBooksQuery } from "@/redux/api/booksApi";
import Table from "./Table";

type TBook = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: number;
    available: boolean;
};

const AllBooks = () => {
    const { data, isLoading, isError } = useGetAllBooksQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    if (isLoading) return <p className="text-center p-5">Loading...😜</p>;
    if (isError)
        return <p className="text-center p-5">Failed to load books...😑</p>;
    const books = data.data;
    return (
        <div className="min-h-screen px-4 sm:px-10 py-8 bg-gray-50">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
                All Books
            </h1>
            <div className="overflow-x-auto">

            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200 text-left">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">
                            Title
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Author
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Genre
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Copies
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            ISBN
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Available
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book: TBook) => (
                        <Table key={book._id} book={book}></Table>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllBooks;

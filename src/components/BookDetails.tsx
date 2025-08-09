import { useGetBookByIdQuery } from "@/redux/api/booksApi";
import { useParams } from "react-router";

const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useGetBookByIdQuery(id!);
    if (isLoading) return <p className="text-center mt-10">Loading...😜</p>;
    if (error)
        return (
            <p className="text-red-500 text-center mt-10">
                Failed to load book.
            </p>
        );

    const book = data?.data;
    return (
        <div className="max-w-xl mx-auto my-10 p-6 border rounded-lg shadow bg-white">
            <h1 className="text-2xl font-bold mb-4 text-center">
                📖 {book?.title}
            </h1>
            <div className="space-y-2 text-gray-700">
                <p>
                    <strong>Author:</strong> {book?.author}
                </p>
                <p>
                    <strong>Genre:</strong> {book?.genre}
                </p>
                <p>
                    <strong>Copies:</strong> {book?.copies}
                </p>
                <p>
                    <strong>ISBN:</strong> {book?.isbn}
                </p>
                <p>
                    <strong>Available:</strong>{" "}
                    {book?.available ? "✅ Yes" : "❌ No"}
                </p>
                <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(book?.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default BookDetails;

import EditBook from "@/components/EditBook";
import { useDeleteBooksMutation } from "@/redux/api/booksApi";
import { toast } from "sonner";
import Swal from "sweetalert2";

type TBook = {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: number;
    available: boolean;
};

const Table = ({ book }: { book: TBook }) => {
    const [deleteBook, { isLoading, error }] = useDeleteBooksMutation();
    const { _id } = book;

    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await deleteBook(id).unwrap();
                Swal.fire('Deleted!', 'The book has been deleted.', 'success');
            } catch (error) {
                Swal.fire('Error!', 'Failed to delete the book.', 'error');
                console.log(error);
            }
        }
    };

    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2">{book.title}</td>
            <td className="border border-gray-300 px-4 py-2">{book.author}</td>
            <td className="border border-gray-300 px-4 py-2">{book.genre}</td>
            <td className="border border-gray-300 px-4 py-2">{book.copies}</td>
            <td className="border border-gray-300 px-4 py-2">{book.isbn}</td>
            <td className="border border-gray-300 px-4 py-2">
                {book.available ? (
                    <span className="text-green-600">Available</span>
                ) : (
                    <span className="text-red-600">Unavailable</span>
                )}
            </td>
            <td className="border border-gray-300 px-4 py-2">
                <div className="flex gap-3 space-y-1 justify-center items-center p-2">
                    <EditBook book={book}></EditBook>

                    <button className="px-5 py-2 rounded border cursor-pointer bg-green-500 text-white">
                        Borrow
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="px-5 py-2 rounded border cursor-pointer bg-red-500 text-white"
                    >
                        {isLoading ? "Deleting" : "Delete"}
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default Table;

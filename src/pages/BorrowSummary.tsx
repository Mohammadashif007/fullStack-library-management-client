import { useGetAllBorrowsQuery } from "@/redux/api/borrowApi";

const BorrowSummary = () => {
    const { data, isLoading, error } = useGetAllBorrowsQuery(undefined);
    const borrowed = data?.data;
    console.log(borrowed);
    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (error)
        return (
            <p className="text-center text-red-500 mt-10">
                Failed to load data.
            </p>
        );

    return (
        <div className="min-h-screen">
            <div className=" max-w-4xl mx-auto mt-10 p-5 bg-white rounded-xl shadow-md border my-5">
                <h2 className="text-xl font-bold mb-6 text-center">
                    📚 Borrowed Books Summary
                </h2>
                <table className="min-w-full border text-sm text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Book Title</th>
                            <th className="px-4 py-2 border">ISBN</th>
                            <th className="px-4 py-2 border">
                                Total Quantity Borrowed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {borrowed?.map(
                            (
                                book: {
                                    bookDetails: {
                                        title: string;
                                        isbn: number;
                                    };
                                    totalQuantity: number;
                                },
                                idx: number
                            ) => (
                                <tr
                                    key={idx}
                                    className="odd:bg-white even:bg-gray-50"
                                >
                                    <td className="px-4 py-2 border">
                                        {book?.bookDetails?.title}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {book?.bookDetails?.isbn}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {book.totalQuantity}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowSummary;

import { useGetAllBooksQuery } from "@/redux/api/booksApi";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    getSortedRowModel,
} from "@tanstack/react-table";

type TBook = {
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: string;
    available: boolean;
};

const columnHelper = createColumnHelper<TBook>();

const columns = [
    columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("author", {
        header: "Author",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("copies", {
        header: "Copies",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("genre", {
        header: "Genre",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("isbn", {
        header: "ISBN",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("available", {
        header: "Availability",
        cell: (info) =>
            info.getValue() ? <span>Available</span> : <span>unavailable</span>,
    }),
    columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const book = row.original;
            return (
                <div className="flex gap-2">
                    <button
                        onClick={() => console.log("Edit", book)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => console.log("Delete", book)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => console.log("Borrow", book)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                        Borrow
                    </button>
                </div>
            );
        },
    }),
];

const BookTable = () => {
    // ! new data
    const { data, isLoading, error } = useGetAllBooksQuery(undefined);
    const books = data?.data;

    // !

    const table = useReactTable({
        data: books ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    if (isLoading) return <p className="text-center my-5">Loading...😜</p>;
    if (error)
        return <p className="text-center my-5">Something was wrong...😜</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-indigo-700 text-center">
                Employee Table
            </h1>
            <table className="table-auto w-full border border-indigo-400 shadow-lg rounded-md overflow-hidden bg-white">
                <thead className="bg-indigo-500 text-white">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    className="p-3 cursor-pointer select-none hover:bg-indigo-600 transition-all text-left"
                                    key={header.id}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="hover:bg-indigo-50 transition-all even:bg-indigo-100"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td className="border px-4 py-2" key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;

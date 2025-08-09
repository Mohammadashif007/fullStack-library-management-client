import {
    useGetBookByIdQuery,
    useUpdateBooksMutation,
} from "@/redux/api/booksApi";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type TBook = {
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: number;
    available: boolean;
};

const EditBookById = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data, isLoading: loadingBook } = useGetBookByIdQuery(id!);
    const [updateBooks, { isLoading: isUpdating }] = useUpdateBooksMutation();
    const book = data?.data;

    const { register, handleSubmit, reset } = useForm<TBook>({
        defaultValues: book,
    });

    React.useEffect(() => {
        if (book) reset(book);
    }, [book, reset]);

    const onSubmit = async (formData: TBook) => {
        try {
            const payload = {
                id: book._id,
                newPost: formData,
            };
            await updateBooks(payload).unwrap();

            toast.success("Book updated successfully!");
            navigate("/books");
        } catch (err) {
            console.error(err);
            toast.error("Failed to update book.");
        }
    };

    if (loadingBook) return <p className="text-center mt-10">Loading...😜</p>;

    return (
        <div className="max-w-xl mx-auto my-10 bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
                ✏️ Edit Book
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label className="block font-medium mb-1">Title</label>
                    <Input {...register("title")} />
                </div>
                <div>
                    <label className="block font-medium mb-1">Author</label>
                    <Input {...register("author")} />
                </div>
                <div>
                    <label className="block font-medium mb-1">Genre</label>
                    <Input {...register("genre")} />
                </div>
                <div>
                    <label className="block font-medium mb-1">Copies</label>
                    <Input
                        type="number"
                        {...register("copies", { valueAsNumber: true })}
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">ISBN</label>
                    <Input
                        type="number"
                        {...register("isbn", { valueAsNumber: true })}
                    />
                </div>
                <div className="pt-2 text-sm text-gray-600 italic">
                    📌 Availability is based on copies. You can update it
                    manually if needed.
                </div>
                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={isUpdating}>
                        {isUpdating ? "Updating..." : "Update Book"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditBookById;

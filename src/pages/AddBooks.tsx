import { useForm } from "react-hook-form";
import { toast } from "sonner"; // Optional for toast
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddBookMutation } from "@/redux/api/booksApi";
import { useNavigate } from "react-router";

type TBook = {
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: number;
    available: boolean;
};

const AddBooks = () => {
    const { register, handleSubmit, reset } = useForm<TBook>();
    const navigate = useNavigate();

    const [addBook, { isLoading}] = useAddBookMutation();

    const onSubmit = async (data: TBook) => {
        console.log(data);
        const payload = {
            ...data,
            available: data.copies > 0,
        };

        try {
            await addBook(payload).unwrap();
            toast.success("📚 Book added successfully!");
            reset();
            navigate("/books")
        } catch (err) {
            console.error(err);
            toast.error("❌ Failed to add book");
        }
    };

    return (
        <div className="max-w-xl mx-auto my-8 bg-white shadow-lg rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-6 text-center">
                ➕ Add New Book
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <Input
                        type="text"
                        placeholder="e.g. Harry Potter"
                        {...register("title", {
                            required: "Title is required",
                        })}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Author</label>
                    <Input
                        type="text"
                        placeholder="e.g. J.K. Rowling"
                        {...register("author", {
                            required: "Author is required",
                        })}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Genre</label>
                    <Input
                        type="text"
                        placeholder="e.g. Fantasy"
                        {...register("genre", {
                            required: "Genre is required",
                        })}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Copies</label>
                    <Input
                        type="number"
                        placeholder="e.g. 12"
                        {...register("copies", {
                            required: "Copies are required",
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: "Copies cannot be negative",
                            },
                        })}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">ISBN</label>
                    <Input
                        type="number"
                        placeholder="e.g. 9780747532699"
                        {...register("isbn", {
                            required: "ISBN is required",
                            valueAsNumber: true,
                            min: { value: 1, message: "ISBN must be valid" },
                        })}
                    />
                </div>

                <div className="pt-2 text-sm text-gray-600 italic">
                    📌 Availability will be set automatically based on the
                    number of copies.
                </div>

                <div className="flex justify-end pt-4">
                    <Button type="submit">
                        {isLoading ? "Submitting..." : "Add Book"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddBooks;

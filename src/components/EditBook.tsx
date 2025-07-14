import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { useUpdateBooksMutation } from "@/redux/api/booksApi";

type TBook = {
    _id?: string;
    title: string;
    author: string;
    genre: string;
    copies: number;
    isbn: number;
    available: boolean;
};

const EditBook = ({ book }: { book: TBook }) => {
    const [updateBooks, { isLoading, error }] = useUpdateBooksMutation();
    const form = useForm({
        defaultValues: book,
    });

    const onSubmit = async (formData: TBook) => {
        try {
            const payload = {
                id: book._id,
                newPost: formData
            }
            const res = await updateBooks(payload).unwrap();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">Edit Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                    <DialogDescription>
                        Edit book information{" "}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-3"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">Title</FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">Author</FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">Genre</FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">Copies</FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">ISBN</FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="available"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="">
                                        Availability
                                    </FormLabel>
                                    <FormControl>
                                        <Input className="" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button className="cursor-pointer" type="submit">
                                Save changes
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EditBook;

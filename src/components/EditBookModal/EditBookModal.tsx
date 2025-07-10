import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useGetSingleBookQuery } from "@/redux/api/booksApi";

type EditBookModalProps = {
    bookId: string;
};

export function EditBookModal({ bookId }: EditBookModalProps) {
    const [open, setOpen] = useState(false);

    const { data, isLoading, error } = useGetSingleBookQuery(bookId, {
        skip: !open,
    });
    console.log(data);
    const form = useForm();

    useEffect(() => {
        if (data) {
            form.reset({
                title: data.title,
                author: data.author,
                genre: data.genre,
                isbn: data.isbn,
                copies: data.copies,
                availability: data.available ? "available" : "unavailable",
            });
        }
    }, [data, form]);

    const onSubmit = (formData) => {
        console.log("Submitted data:", formData);
        setOpen(false); // close dialog after submit
    };

    return (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="outline">
                    🖊 Edit Book
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error loading book</p>
                ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Edit Book Information 🧾</DialogTitle>
                            <DialogDescription>
                                Update book details and click save.
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            {[
                                { name: "title", label: "Title", placeholder: "Book title" },
                                { name: "author", label: "Author", placeholder: "Author name" },
                                { name: "genre", label: "Genre", placeholder: "Book genre" },
                                { name: "isbn", label: "ISBN", placeholder: "ISBN number" },
                                { name: "copies", label: "Copies", placeholder: "Number of copies" },
                                { name: "availability", label: "Availability", placeholder: "available/unavailable" },
                            ].map(({ name, label, placeholder }) => (
                                <FormField
                                    key={name}
                                    control={form.control}
                                    name={name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="mt-3">{label}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={placeholder} {...field} value={field.value} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <DialogFooter className="mt-3">
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </Form>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}

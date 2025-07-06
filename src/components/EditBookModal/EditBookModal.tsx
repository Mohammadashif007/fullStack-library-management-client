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

export function EditBookModal() {
    
    
    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
        form.reset();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="cursor-pointer" variant="outline">🖊 Edit Book </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Edit Book Information 🧾</DialogTitle>
                        <DialogDescription>
                            Make changes to your book here. Click save when you
                            are done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">
                                        Title
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Book title"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">
                                        Author
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Author Name"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">
                                        Genre
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Genre of book"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">ISBN</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="ISBN"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">
                                        Copies
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="copies"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="availability"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="mt-3">
                                        Availability
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Availability"
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="mt-3">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </Form>
                </form>
            </DialogContent>
        </Dialog>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { useAddBorrowMutation } from "@/redux/api/borrowApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";


interface IBorrow {
    book: string;
    dueDate: Date;
    quantity: number;
}

export function BorrowBook({ book }: Partial<IBorrow>) {
    const [addBorrow, { isLoading }] = useAddBorrowMutation();
    const [open, setOpen] = useState(false);
    const form = useForm<IBorrow>();
    const navigate = useNavigate();

    const onSubmit = async (data: IBorrow) => {
        const borrowData = {
            ...data,
            dueDate: format(data.dueDate, "yyyy-MM-dd"),
            book,
        };
        try {
            await addBorrow(borrowData).unwrap();
            toast.success("Book borrowed successfully");
            setOpen(false);
            navigate("/borrow-summary");
        } catch (error: any) {
            const message = error?.data?.message;
            toast.error(message);
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className=" cursor-pointer bg-green-500 text-white">
                    Borrow
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                    <DialogDescription>
                        Borrow your favorite books
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Form {...form}>
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            value={field.value || ""}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col mt-5">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value &&
                                                            "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            "PPP"
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className="w-auto p-0"
                                            align="start"
                                        >
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="mt-5">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" className="cursor-pointer">
                                {isLoading ? "Borrowing..." : "Save changes"}
                            </Button>
                        </DialogFooter>
                    </Form>
                </form>
            </DialogContent>
        </Dialog>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useAddBorrowMutation } from "@/redux/api/borrowApi";

import { useNavigate, useParams } from "react-router";





const BorrowBookById = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const form = useForm({
        defaultValues: {
            book: bookId,
            quantity: 1,
            dueDate: "",
        },
    });

    const [addBorrow, { isLoading }] = useAddBorrowMutation();

    const onSubmit = async (data: TFormValues) => {
        try {
            const result = await addBorrow(data).unwrap();
            toast.success("📚 Book borrowed successfully");
            navigate("/borrow-summary");
        } catch (err: any) {
            const message = err?.data?.message || "Something went wrong";
            toast.error(`❌ ${message}`);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white border shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
                📖 Borrow Book
            </h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    {/* Quantity */}
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1}
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Due Date */}
                    <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Due Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full text-left font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value
                                                    ? format(
                                                          new Date(field.value),
                                                          "PPP"
                                                      )
                                                    : "Pick a date"}
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
                                            selected={
                                                field.value
                                                    ? new Date(field.value)
                                                    : undefined
                                            }
                                            onSelect={(date) =>
                                                field.onChange(
                                                    date
                                                        ? date.toISOString()
                                                        : ""
                                                )
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4 text-right">
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Borrowing..." : "Borrow Book"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default BorrowBookById;

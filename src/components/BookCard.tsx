import { BorrowBookModal } from "./BorrowBookModal/BorrowBookModal";
import { EditBookModal } from "./EditBookModal/EditBookModal";
import { Button } from "./ui/button";

export type TBook = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: number;
    available: boolean;
};

const BookCard = ({ book }: {book: TBook}) => {
    const { _id, title, author, genre, isbn, available } = book;
    // const handleBorrowBook = (id) => {
    //     console.log(id);
    // };
    return (
        <div className="border-1 p-5 rounded-2">
            <p>{title}</p>
            <p>{author}</p>
            <p>{genre}</p>
            <p>{isbn}</p>
            <p>{available ? "available": "unavailable"}</p>
            <div className="flex gap-5">
                {/* <Button className="bg-blue-700 text-white">Borrow Book</Button> */}
                <BorrowBookModal id={_id}></BorrowBookModal>
                <EditBookModal></EditBookModal>
                <Button className="bg-blue-700 text-white cursor-pointer">
                    Delete Book
                </Button>
            </div>
        </div>
    );
};

export default BookCard;

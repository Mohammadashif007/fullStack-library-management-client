import DataTable from "react-data-table-component";

type TBook = {
  title: string;
  author: string;
  genre: string;
  copies: number;
  isbn: number;
  available: boolean;
};

type Props = {
  book: TBook[];
};

const columns: {
  name: string;
  selector: (row: TBook) => any;
}[] = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Author",
    selector: (row) => row.author,
  },
  {
    name: "Genre",
    selector: (row) => row.genre,
  },
  {
    name: "ISBN",
    selector: (row) => row.isbn,
  },
  {
    name: "Copies",
    selector: (row) => row.copies,
  },
  {
    name: "Available",
    selector: (row) => (row.available ? "Yes" : "No"),
  },
];

const BookTable = ({ book }: Props) => {
  return (
    <div>
      <DataTable<TBook>
        columns={columns}
        data={book}
    
      />
    </div>
  );
};

export default BookTable;

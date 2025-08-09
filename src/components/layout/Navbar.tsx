// import { Link } from "react-router";

// const Navbar = () => {
//     return (
//         <nav className="bg-blue-800 text-white p-4 shadow-md">
//             <div className="container mx-auto md:flex justify-between items-center">
//                 <div className="text-xl font-bold">
//                     <Link to={"/"}>📚 BorrowBook</Link>
//                 </div>
//                 <ul className="md:flex space-x-6">
//                     <li>
//                         <Link to="/books" className="hover:underline">
//                             All Books
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/create-book" className="hover:underline">
//                             Add Book
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to="/borrow-summary" className="hover:underline">
//                             Borrow Summary
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to={"/"}>📚 BorrowBook</Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/books" className="hover:underline">
                            All Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/create-book" className="hover:underline">
                            Add Book
                        </Link>
                    </li>
                    <li>
                        <Link to="/borrow-summary" className="hover:underline">
                            Borrow Summary
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-4 mt-4 px-4 pb-4 bg-blue-900 rounded-md">
                    <li>
                        <Link
                            to="/books"
                            className="block hover:underline"
                            onClick={() => setIsOpen(false)}
                        >
                            All Books
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/create-book"
                            className="block hover:underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Add Book
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/borrow-summary"
                            className="block hover:underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Borrow Summary
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;


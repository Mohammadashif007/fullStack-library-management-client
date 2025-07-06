import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-6 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Site Info */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">
                        📚 Lolita Library
                    </h2>
                    <p className="text-sm">
                        Lolita Library is the best library in the town. We want
                        to build a society where everyone can read for free. 👻
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Quick Links
                    </h3>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link to="/books" className="hover:underline">
                                All Books
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-book" className="hover:underline">
                                Add Book
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/borrow-summary"
                                className="hover:underline"
                            >
                                Borrow Summary
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Credits */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Credits
                    </h3>
                    <p className="text-sm">
                        Built by{" "}
                        <a
                            href="#"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Ashif
                        </a>
                    </p>
                    <p className="text-sm mt-1">
                        © {new Date().getFullYear()} Lolita Library. All rights
                        reserved.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
                Made with ❤️ by Ashif — Powered by Node.js & React
            </div>
        </footer>
    );
};

export default Footer;

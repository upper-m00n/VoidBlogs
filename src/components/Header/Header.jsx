import React from "react";
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    return (
        <header className="py-4 shadow-lg bg-gradient-to-r from-gray-600 to-gray-800 text-white">
            <Container>
                <nav className="flex items-center">
                    <div className="mr-6">
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto space-x-6">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-5 py-2 text-lg font-medium rounded-lg transition-colors duration-300 transform hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

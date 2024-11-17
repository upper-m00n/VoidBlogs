import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                <nav className="flex items-center justify-between">
                    <Link to='/' className="flex items-center">
                        <Logo width="70px" />
                    </Link>

                    {/* Hamburger Icon for Mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none lg:hidden"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    {/* Menu Items */}
                    <ul className={`flex-col lg:flex-row lg:flex lg:space-x-6 items-center ${isMenuOpen ? "flex" : "hidden"} lg:flex mt-4 lg:mt-0`}>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className="my-2 lg:my-0">
                                    <button
                                        onClick={() => {
                                            navigate(item.slug);
                                            setIsMenuOpen(false);
                                        }}
                                        className="inline-block px-5 py-2 text-lg font-medium rounded-lg transition-colors duration-300 transform hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className="my-2 lg:my-0">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

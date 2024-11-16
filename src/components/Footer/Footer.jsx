import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Footer() {
    return (
        <section className="w-full relative overflow-hidden py-12 bg-gradient-to-r from-gray-700 to-gray-900 text-white border-t border-gray-600">
            <div className="relative z-10 mx-0 px-4 max-w-none">
                <div className="flex flex-wrap -m-6">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-6 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <p className="text-sm text-gray-300">
                                &copy; 2023 DevUI. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-300 hover:text-white transition duration-200"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

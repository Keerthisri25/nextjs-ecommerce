'use client'

import Link from "next/link"
import { useState } from "react"
import MegaMenu from "./megaMenu"
import { useCart } from "../context/cartContext"

function Menu(){
    const [menuOpen, setMenuOpen] = useState(false)
    const {cart} = useCart();
    return(
        <>
            <nav className="bg-white dark:bg-gray-900 border-b fixed top-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800 dark:text-white">
                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                    <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Z" clipRule="evenodd" />
                </svg>
                </div>

                
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={menuOpen}
                >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>

                
                <div className="hidden md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex items-center space-x-8">
                    <li>
                        <Link className="cursor-pointer hover:text-blue-500 text-white" href="/">
                            Home
                        </Link>
                    </li>
                    <li><MegaMenu /></li>
                    <li>
                        <Link className="hover:text-blue-500 cursor-pointer" href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-gray-800 dark:text-white" viewBox="0 0 24 24">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.39l2.56 9.59a3.75 3.75 0 0 0-2.81 3.62.75.75 0 0 0 .75.75h15.75a.75.75 0 0 0 0-1.5H5.38a2.25 2.25 0 0 1 2.12-1.5h11.22a.75.75 0 0 0 .67-.42 60.36 60.36 0 0 0 2.96-7.23.75.75 0 0 0-.52-.96A60.86 60.86 0 0 0 5.68 4.51l-.23-.87A1.88 1.88 0 0 0 3.64 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm12.75 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span className="relative right-6 bottom-1 text-sm text-black font-sans">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                    <Link href="/carts" className="text-gray-900 hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500">Cart</Link>
                    </li>
                </ul>
                </div>
            </div>

            
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 z-40 ${
                menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                <button onClick={() => setMenuOpen(false)}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
                <ul className="flex flex-col fixed w-38 space-y-4 p-4 text-gray-800 dark:text-white font-medium">
                    <li>
                        <Link className="cursor-pointer hover:text-blue-500 text-white" href="/">
                            Home
                        </Link>
                    </li>
                    <li><MegaMenu /></li>
                    <li>
                        <Link className="hover:text-blue-500 cursor-pointer" href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Link href="/carts" className="hover:text-blue-700 dark:hover:text-blue-400">Cart</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.39l2.56 9.59a3.75 3.75 0 0 0-2.81 3.62.75.75 0 0 0 .75.75h15.75a.75.75 0 0 0 0-1.5H5.38a2.25 2.25 0 0 1 2.12-1.5h11.22a.75.75 0 0 0 .67-.42 60.36 60.36 0 0 0 2.96-7.23.75.75 0 0 0-.52-.96A60.86 60.86 0 0 0 5.68 4.51l-.23-.87A1.88 1.88 0 0 0 3.64 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm12.75 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        <span className="relative right-7 bottom-0.5 text-sm/10 text-gray-800">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                    </li>
                </ul>
            </div>
           
            {menuOpen && (
                <div
                className="fixed inset-0 bg-black opacity-50 z-30"
                onClick={() => setMenuOpen(false)}
                />
            )}
            </nav>
        </>
    )
}

export default Menu
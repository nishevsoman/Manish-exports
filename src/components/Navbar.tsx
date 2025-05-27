'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [aboutOpen, setAboutOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Nav link classes based on scroll
    const navLinkClass = clsx(
        'block px-4 py-2 transition-colors',
        scrolled ? 'hover:text-[#470E0E] text-black' : 'hover:text-[#ccc] text-white'
    )

    return (
        <nav
            className={clsx(
                'fixed top-0 w-full z-50 transition-colors duration-300',
                scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
            )}
        >
            <div className="relative mx-auto px-4 xl:px-20 py-4 flex justify-between items-center max-w-[1600px]">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Image
                        className="transition-opacity duration-300"
                        src={
                            scrolled
                                ? '/logos/manish-exports-black.svg'
                                : '/logos/manish-exports-white.svg'
                        }
                        alt="Manish Exports Logo"
                        width={200}
                        height={50}
                        priority
                    />
                </div>

                {/* Hamburger - mobile only */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className={clsx('w-6 h-6', scrolled ? 'text-black' : 'text-white')}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop navigation */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6">
                    <Link href="#" className={navLinkClass.replace('block px-4 py-2', '')}>Home</Link>
                    <Link href="#" className={navLinkClass.replace('block px-4 py-2', '')}>Products</Link>

                    {/* Dropdown */}
                    <div className="relative group">
                        <button className={navLinkClass.replace('block px-4 py-2', '')}>About</button>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border rounded-xl shadow-lg p-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 z-50 text-black">
                            <ul className="space-y-1">
                                <li>
                                    <Link href="#" className="hover:text-[#470E0E]">Mission</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#470E0E]">Company</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#470E0E]">Manufacturing</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Us Button - desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        href="#"
                        className={clsx(
                            'border px-4 py-2 transition',
                            scrolled
                                ? 'border-gray-400 text-black bg-white hover:bg-[#470E0E] hover:text-white'
                                : 'border-white text-white bg-transparent hover:bg-white hover:text-black'
                        )}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className={clsx(
                        'md:hidden bg-white text-black shadow-md border-t border-gray-200',
                        'absolute top-full left-0 w-full z-40'
                    )}
                >
                    <nav className="flex flex-col px-4 py-4 space-y-1">
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
                            Home
                        </Link>
                        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
                            Products
                        </Link>

                        {/* Mobile dropdown toggle */}
                        <button
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex justify-between items-center"
                        >
                            About
                            <svg
                                className={clsx('w-4 h-4 ml-2 transition-transform', aboutOpen ? 'rotate-180' : '')}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {aboutOpen && (
                            <div className="pl-6 flex flex-col space-y-1">
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
                                    Mission
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
                                    Company
                                </Link>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">
                                    Manufacturing
                                </Link>
                            </div>
                        )}

                        <Link
                            href="#"
                            className={clsx(
                                'border border-gray-400 text-black bg-white hover:bg-[#470E0E] hover:text-white rounded text-center mt-3 px-4 py-2 font-medium transition'
                            )}
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </nav>
    )
}

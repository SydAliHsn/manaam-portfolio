'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = (props: {}): JSX.Element => {
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const closeNav = () => {
            if (mobileNav) {
                setMobileNav(false);
            }
        }

        window.addEventListener('scroll', closeNav)

        return () =>
            window.removeEventListener('scroll', closeNav)
    }, []);

    return <nav className="flex items-center justify-between py-8">
        <div className="logo">
            <Link href={'/'} className='block font-syne text-white text-xl font-bold spacing hover:scale-105 hover:tracking-widest hover:scale- transition-all py-2'>
                MANAAM
            </Link>
        </div>
        <ul className="hidden md:flex flex-row gap-10">
            <li>
                <Link href="/" className="text-sm font-rubik font-normal text-white">
                    Home
                </Link>
            </li>
            <li>
                <Link href="#about" className="text-sm font-rubik font-normal text-white">
                    About Me
                </Link>
            </li>
            <li>
                <Link href="#work" className="text-sm font-rubik font-normal text-white">
                    My works
                </Link>
            </li>
        </ul>
        <div className="md:hidden block">
            <button className='cursor-pointer'
                onClick={() => setMobileNav(!mobileNav)}>
                <svg
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.8em"
                    width="1.8em"
                    className="text-white"
                >
                    <path
                        fill="currentColor"
                        d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h33q.65 0 1.075.425Q42 33.85 42 34.5q0 .65-.425 1.075Q41.15 36 40.5 36Zm0-10.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5h33q.65 0 1.075.425Q42 23.35 42 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.5q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Z"
                    />
                </svg>
            </button>


            <ul
                id="menu"
                className={`fixed flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-zinc-900 sm:w-auto sm:self-center left-6 right-6 z-10 rounded-2xl ${!mobileNav && 'translate-x-[120%]'} transition-all duration-300`}
            >
                <Link href="/" className="font-rubik font-normal text-white">
                    Home
                </Link>
                <Link href="#about" className="font-rubik font-normal text-white">
                    About Me
                </Link>
                <Link href="#work" className="font-rubik font-normal text-white">
                    My works
                </Link>
            </ul>


        </div>
    </nav>
};

export default Navbar;
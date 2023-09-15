import React from 'react';
import Link from 'next/link';

const Navbar = (props: {}): JSX.Element => {
    return <nav className="flex items-center justify-between py-8">
        <div className="logo">
            <Link href={'/'} className='block font-syne text-white text-xl font-bold spacing hover:scale-105 hover:tracking-widest hover:scale- transition-all py-2'>
                MANAAM
            </Link>
        </div>
        <ul className="hidden md:flex flex-row gap-10">
            <Link href="/" className="text-sm font-rubik font-normal text-white">
                Home
            </Link>
            <Link href="#about" className="text-sm font-rubik font-normal text-white">
                About Me
            </Link>
            <Link href="#work" className="text-sm font-rubik font-normal text-white">
                My works
            </Link>
        </ul>
        <div className="md:hidden block">
            <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                height="1.8em"
                width="1.8em"
                className="text-white"
                id="btn"
            >
                <path
                    fill="currentColor"
                    d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h33q.65 0 1.075.425Q42 33.85 42 34.5q0 .65-.425 1.075Q41.15 36 40.5 36Zm0-10.5q-.65 0-1.075-.425Q6 24.65 6 24q0-.65.425-1.075Q6.85 22.5 7.5 22.5h33q.65 0 1.075.425Q42 23.35 42 24q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.5q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h33q.65 0 1.075.425Q42 12.85 42 13.5q0 .65-.425 1.075Q41.15 15 40.5 15Z"
                />
            </svg>
            <div className="md:hidden">
                <ul
                    id="menu"
                    className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-zinc-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                >
                    <li className="text-sm font-rubik font-normal text-white uppercase">
                        Home
                    </li>
                    <li className="text-sm font-rubik font-normal text-white uppercase">
                        About me
                    </li>
                    <li className="text-sm font-rubik font-normal text-white uppercase">
                        My works
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};

export default Navbar;
import React from 'react';
import Link from 'next/link';

const Footer = (props: {}): JSX.Element => {
    return <footer className="py-8 px-8 sm:px-12 bg-zinc-900">
        <div className="my-4 text-center">
            <h4 className="text-md font-syne font-bold text-primary">
                Get in Touch With Me
            </h4>
            <a href="mailto:hello@manaamrehan.com">
                <h2
                    className="text-lg sm:text-2xl lg:text-3xl font-syne font-bold text-white lowercase underline mt-2"
                >
                    hello@manaamrehan.com
                </h2>
            </a>
        </div>
        <div
            className="flex flex-col md:flex-row justify-between gap-10 mt-20 items-center"
        >
            <div className="my-auto">
                <Link href={'/'} className='block font-syne text-white text-xl font-bold spacing hover:scale-105 hover:tracking-widest hover:scale- transition-all py-2'>
                    MANAAM
                </Link>
            </div>
            <div>
                <a href="tel:+923324658649">
                    <h4 className="text-md font-syne font-bold text-white">+92 332 465 8649</h4>
                </a>
            </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4 className="text-md font-syne font-bold text-white text-center">
            &copy; Manaam Rehan.
        </h4>

    </footer>
};

export default Footer;
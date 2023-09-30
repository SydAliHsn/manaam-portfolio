import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import profileImage from '../public/profile.jpg'
import { AboutContent } from '@/lib/types';

const About = ({ content }: { content: AboutContent }): JSX.Element => {
    return <section
        id="about"
        className="flex lg:flex-row flex-col-reverse justify-between gap-8 lg:gap-10"
    >
        <section className="hidden md:block img-bg left-4 mt-14"></section>

        <div className="m-auto" data-aos="fade-left"
            data-aos-duration="1000">
            <h2 className="text-center sm:text-left text-3xl font-syne font-bold text-white">
                Let&apos;s get to know about me
            </h2>
            {
                content.paragraphs.map((paragraph, index) => {
                    return <p key={index} className="text-zinc-500 font-rubik font-thin w-full mt-6">
                        {paragraph}
                    </p>
                })
            }

            <Link href="#contact"
                className="bg-primary px-6 py-2 rounded-full hover:scale-105 transition-transform font-bold font-rubik text-gray-100 inline-block mt-10"
            >
                Let&apos;s have a chat!
            </Link>
        </div>
        <div
            data-aos="fade-left" data-aos-duration="1000">
            <Image src={profileImage} alt={'profile'} className='max-w-[min(100%,25rem)] sm:max-w-[25rem] rounded-[2.5rem] mx-auto' />
        </div>
    </section>
};

export default About;
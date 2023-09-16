import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import profileImage from '../public/profile.jpg'

const About = (props: {}): JSX.Element => {
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
            <p className="text-zinc-500 font-rubik font-thin w-full mt-6">
                Hello! I am Embedded Software Developer and a Professional PCB designer with more than a year of experience in my field. During my embedded systems career, I have designed several systems based on IoT, gateway systems, BLE mesh network indeginous robots. I have also worked on designing Printed Circuit Boards(PCB) which mostly include battery charging circuits, battery Management systems, development boards and many others!
            </p>
            <p className="text-zinc-500 font-rubik font-thin w-full mt-6">
                My software career revolves around programming different micro-controllers like ESP32 , nRF series , AtMega and many more for various applications. I also have experience in working with different communication protocols like RS485, UART, JTAG etc along with wokring on different messaging protocols like MQTT, BLE Mesh etc.
            </p>
            <p className="text-zinc-500 font-rubik font-thin w-full mt-6">
                My hardware careeer is mainly focused on desiging power boards for my clients. I use different softwares like Altium, Kicad and EasyEDA for desiging boards.
            </p>

            <Link href="#contact"
                className="bg-primary px-6 py-2 rounded-full hover:scale-105 transition-transform font-bold font-rubik text-gray-100 inline-block mt-10"
            >
                Let&apos;s have a chat!
            </Link>
        </div>
        <div
            data-aos="fade-left" data-aos-duration="1000">
            <Image src={profileImage} alt={'profile'} className='sm:max-w-[25rem] rounded-[2.5rem] mx-auto' />
        </div>
    </section>
};

export default About;
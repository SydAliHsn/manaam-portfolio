import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import { Testimonial } from '@/lib/types';

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }): JSX.Element => {
    return <section
        id="testimonials"
        className="flex flex-col gap-10 mb-16"
    >
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-50 font-syne'>Testimonials</h1>

        <section className="hidden md:block img-bg left-4 mt-4"></section>

        <div className='grid lg:grid-cols-[repeat(3,1fr)] gap-8'>
            {testimonials.map(testimonial =>
                <TestimonialCard key={testimonial.reviewer} review={testimonial.review} stars={testimonial.stars} reviewer={testimonial.reviewer} />)}
        </div>
    </section>
};

const TestimonialCard = ({ review, reviewer, stars, className }: { review: string, reviewer: string, stars: number, className?: string }) => {
    return <div className={`bg-zinc-900 rounded-xl p-4 sm:p-6 xl:p-8 ${className}`}
        data-aos="zoom-in"
    >
        <div className="flex justify-between">
            <div className='text-yellow-500 text-center text-3xl flex justify-center items-center'>
                {[...Array(stars)].map((_, i) => <AiFillStar key={i} />)}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-primary w-9 scale-y-[-1]' viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" /></svg>

        </div>
        <div className="mt-2">
            <p className="text-sm font-rubik font-thin text-slate-400">
                “{review}”
            </p>
            <h2 className="font-syne text-md text-white font-bold mt-6">
                -{reviewer}
            </h2>
        </div>
    </div>
};

export default Testimonials;
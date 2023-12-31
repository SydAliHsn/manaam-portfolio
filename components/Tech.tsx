import React from 'react';

const Tech = ({ technologies }: { technologies: string[] }): JSX.Element => {
    return <section
        id="tech"
        className="my-20 flex items-center justify-center flex-col"
    >
        <h2 className="text-2xl font-syne font-bold text-white text-center">
            My Tech Stack
        </h2>
        <p className='text-white text-lg sm:text-xl font-thin font-syne text-center sm:text-left mt-4'> I&apos;m most familiar with these — more being added </p>

        <div className='flex mt-10 sm:mt-12 gap-3 items-center justify-center flex-wrap max-w-3xl'>
            {technologies.map((tech, index) => <TechBubble key={index} tech={tech} delay={index * 100} />)}
        </div>
    </section>
};

const TechBubble = ({ tech, delay }: { tech: string, delay: number }): JSX.Element => {
    return <div data-aos="fade-up" data-aos-delay={delay} className="flex border-2 border-primary rounded-3xl px-3 py-1 flex-col items-center justify-center text-white font-rubik sm:text-lg">{tech}</div>
}

export default Tech;
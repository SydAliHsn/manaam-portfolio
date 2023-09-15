import React from 'react';

const Projects = (props: {}): JSX.Element => {
    return <section
        id="work"
        className="my-20 flex items-center justify-center flex-col"
    >
        <h2 className="text-2xl font-syne font-bold text-white text-center">
            My Projects
        </h2>
        <p className='text-white text-lg sm:text-xl font-thin font-syne mt-4'>Some stuff I&apos;ve made trying to put my dent in the universe!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-4" data-aos="flip-right" data-aos-duration="1000">
                <img src="/project-1.png" alt="Image" className="max-h-[20rem]" />
                <div className="mt-4">
                    <h2 className="text-lg font-bold font-syne text-white">
                        Brand Journey Improvements
                    </h2>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 font-rubik">
                            I made something really cool in this project using really cool technologies with my cool team.

                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4" data-aos="flip-left" data-aos-duration="1000">
                <img src="/project-2.png" alt="Image" className="max-h-[20rem]" />
                <div className="mt-4">
                    <h2 className="text-lg font-bold font-syne text-white">
                        Brand Grouping
                    </h2>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 font-rubik">
                            I made something really cool in this project using really cool technologies with my cool team.

                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4" data-aos="flip-right" data-aos-duration="1000">
                <img src="/project-3.png" alt="Image" className="max-h-[20rem]" />
                <div className="mt-4">
                    <h2 className="text-lg font-bold font-syne text-white">NFT Glimps</h2>

                    <div className="mt-2">
                        <p className="text-sm text-gray-500 font-rubik">
                            I made something really cool in this project using really cool technologies with my cool team.

                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4" data-aos="flip-left" data-aos-duration="1000">
                <img src="/project-4.png" alt="Image" className="max-h-[20rem]" />
                <div className="mt-4">
                    <h2 className="text-lg font-bold font-syne text-white">
                        Brand Suggestions
                    </h2>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 font-rubik">
                            I made something really cool in this project using really cool technologies with my cool team.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Projects;
import { Project } from '@/lib/types';
import React from 'react';

const Projects = ({ projects }: { projects: Project[] }): JSX.Element => {
    return <section
        id="work"
        className="my-20 flex items-center justify-center flex-col"
    >
        <h2 className="text-2xl font-syne font-bold text-white text-center">
            My Projects
        </h2>
        <p className='text-white text-lg sm:text-xl font-thin font-syne mt-4'>Some stuff I&apos;ve made trying to put my dent in the universe!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

            {projects.map(project => <ProjectCard key={project.title} image={project.image} description={project.description} title={project.title} />)}

        </div>
    </section>
};

const ProjectCard = ({ image, description, title }: { image: string, description: string, title: string }): JSX.Element => {
    return <div className="p-4" data-aos="flip-left" data-aos-duration="1000">
        <img src={image} alt="Image" className="max-h-[20rem] mx-auto sm:mx-0" />
        <div className="mt-4">
            <h2 className="text-lg font-bold font-syne text-white">
                {title}
            </h2>
            <div className="mt-2">
                <p className="text-sm text-gray-500 font-rubik">
                    {description}
                </p>
            </div>
        </div>
    </div>
}

export default Projects;
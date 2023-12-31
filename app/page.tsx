import Link from 'next/link';

import AosWrapper from '@/components/AosWrapper';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { getProjects, getTestimonials, getTechnologies, getAboutContent } from '@/lib/storyblok';
import Tech from '@/components/Tech';

export const revalidate = 2 * 3600;

export default async function Home() {
  const testimonials = await getTestimonials();
  const projects = await getProjects();
  const technologies = await getTechnologies();
  const aboutContent = await getAboutContent();

  return (
    <AosWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <section
          id="home"
          className="my-28"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center justify-center px-4">
            <section className="img-bg md:right-1/4 md:top-[10%]"></section>
            <h3 className='mb-5 text-center font-syne text-white text-xl sm:text-2xl'>Hi, I&apos;m Manaam Rehan!</h3>
            <h1 className="font-syne font-bold text-4xl text-white text-center">
              Adaptive Embedded Developer
            </h1>
            <Link href="#about"
              className="bg-primary px-6 py-2 rounded-full hover:scale-105 transition-transform font-bold font-rubik text-gray-100 inline-block mt-10"
            >
              About Me
            </Link>
          </div>
        </section>

        <About content={aboutContent} />

        <Tech technologies={technologies} />

        <Projects projects={projects} />

        <Testimonials testimonials={testimonials} />

        <Contact />
      </div>

      <Footer />
    </AosWrapper>
  )
}

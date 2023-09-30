import StoryblokClient from 'storyblok-js-client';
import { AboutContent, Project, Testimonial } from './types';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_SPACE_ACCESS_TOKEN,
});

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const stories = (await getStories({ page: 1, starts_with: 'testimonials/' })) as any;

  const testimonials: Testimonial[] = stories.map((story: any) => {
    const { reviewer, review, stars } = story.content;

    return { reviewer, review, stars: Number(stars) };
  });

  return testimonials;
};

export const getProjects = async (): Promise<Project[]> => {
  const stories = (await getStories({ page: 1, starts_with: 'projects/' })) as any;

  const projects: Project[] = stories.map((story: any) => {
    const { title, image, description } = story.content;

    return { title, image: image.filename, description };
  });

  return projects;
};

export const getTechnologies = async (): Promise<string[]> => {
  const story = (await getStories({ page: 1, starts_with: 'technologies' }))[0] as any;

  const { techNames } = story.content;

  return techNames.split(',').map((tech: string) => tech.trim());
};

export const getAboutContent = async (): Promise<AboutContent> => {
  const story = (await getStories({ page: 1, starts_with: 'about' }))[0] as any;

  const { paragraph1, paragraph2, paragraph3 } = story.content;

  return { paragraphs: [paragraph1, paragraph2, paragraph3] };
};

const getStories = async ({
  page,
  per_page = 100,
  starts_with,
}: {
  page: number;
  per_page?: number;
  starts_with: string;
}) => {
  const { data } = await Storyblok.get('cdn/stories', { per_page, page, starts_with });

  return data.stories;
};

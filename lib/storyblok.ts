import StoryblokClient from 'storyblok-js-client';
import { Testimonial } from './types';

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

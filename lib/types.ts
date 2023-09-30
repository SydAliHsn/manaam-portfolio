export interface Testimonial {
  reviewer: string;
  review: string;
  stars: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface AboutContent {
  paragraphs: string[];
}

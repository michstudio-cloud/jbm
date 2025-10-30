
export interface Service {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface Benefit {
  number: number;
  title: string;
  text: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  title: string;
  description: string;
  isLarge?: boolean;
}

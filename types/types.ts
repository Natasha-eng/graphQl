export interface ICategory {
  name: string;
  slug: string;
}

export interface IAthor {
  bio: string;
  name: string;
  id: string;
  photo: string;
}

export interface IPost {
  node: {
    author: IAthor;
    categories: ICategory[];
    createdAt: string;
    excerpt: string;
    featuredImage: string;
    slug: string;
    title: string;
  };
}

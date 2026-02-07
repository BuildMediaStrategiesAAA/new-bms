export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  bgColor: string;
  textColor: string;
  image: string;
  description: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}
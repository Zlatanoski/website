import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Dynamic and Fully-responsive Grid based game in Java ",
    description: "I built a grid based in Java that had statistics like score and timer, implemented a fully functional MenuBar with availabilities like Save/Load game and also used an algorithm for finding the best move analyzing every button in the grid when the user requests a hint.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  },
  {
    id: 2,
    title: "Calculator App",
    description: "I built a fully functional calculator app in Java",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    id: 3,
    title: "Shop Managing application",
    description: "I have built a program for managing a shop in Java, all products are stored and then ability to add/remove products and proceed to checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Java", level: 90 }
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "C#", level: 85 },
      { name: "C", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "MySQL", level: 70 }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "Linux/Bash", level: 80 }
    ]
  }
];
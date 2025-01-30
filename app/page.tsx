import Image from "next/image";
import ProjectTile from "@/components/ProjectTile";

const projects = [
  {
    title: "Next.js Blog",
    description: "A minimal blog built with Next.js and Tailwind CSS.",
    imageUrl: "/images/nextjs-blog.png",
    githubLink: "https://github.com/yourusername/nextjs-blog",
  },
  {
    title: "AI Image Classifier",
    description: "A deep learning model that classifies images with high accuracy.",
    imageUrl: "/images/ai-classifier.png",
    githubLink: "https://github.com/yourusername/ai-classifier",
  },
  {
    title: "Task Manager App",
    description: "A simple task manager built using React and Firebase.",
    imageUrl: "/images/task-manager.png",
    githubLink: "https://github.com/yourusername/task-manager",
  },
];

export default function Home() {
  return (
    <div>
      <section className="text-6xl bg-blue-500 text-white p-8 text-center py-20 px-8">
        👋 Hi! I'm Dhananjay, nice to meet you! 
      </section>

      <section className="bg-white text-gray-800 p-6 text-lg leading-relaxed text-center">
        Welcome to my personal website! This is just a place for you to get to know me better and where I like to share some of my thoughts and projects.
      </section>

      <section className="bg-blue-500 text-white p-8 text-center">
        <p className="text-4xl"> Projects that I am proud of </p>
      </section>
      
    </div>
  );
}

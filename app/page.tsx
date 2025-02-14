import Image from "next/image";
import ProjectTile from "@/components/ProjectTile";

const projects = [
  {
    title: "Github repo summarizer using RAG (WIP)",
    description: "Currently working on an appliction that summarizes and answers specific content in Github repos",
    imageUrl: "/images/nextjs-blog.png",
    githubLink: "https://github.com/djsurt/planet",
  },
  {
    title: "Speech Therapy Application",
    description: "An application to help ease communication and interactions between speech therapists and students",
    imageUrl: "/images/ai-classifier.png",
    githubLink: "https://github.com/WyldTaegr/confident-voices",
  },
  {
    title: "Smart Lamp (LAMPI)",
    description: "My first Internet of Things project. It's A lamp that can change hue, saturation, and brightness by communicating with a website, iPhone or an Apple Watch!",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            projects.map((project, index) => (
              <ProjectTile
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              />
            ))
          }
        </div>
      </section>
      
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectTileProps {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
}

export default function ProjectTile({ title, description, imageUrl, githubLink }: ProjectTileProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
      <Image src={imageUrl} alt={title} width={400} height={250} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <span className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            <p className="text-lg">
              Check it out
            </p>
          </span>
        </Link>
      </div>
    </div>
  );
}

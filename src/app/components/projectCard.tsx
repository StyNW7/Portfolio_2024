// src/app/components/ProjectCard.tsx
import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-8 bg-red-200 m-8">
            <Image className="w-full" src={imageUrl} alt={title} width={500} height={300} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={projectLink} className="bg-blue-500 text-white px-4 py-2 rounded-full">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;
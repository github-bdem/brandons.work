import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div id={`slide${index}`} className="tech-card w-full transition-all duration-200">
            <div className="flex flex-col h-full">
                <div className="relative overflow-hidden h-40">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-5xl text-gray-300 font-bold">{project.name.charAt(0)}</span>
                        </div>
                    )}
                                    </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-xl mb-3 font-bold uppercase tracking-wider text-gray-900">{project.name}</h2>
                    <p className="text-sm mb-4 flex-grow text-gray-600">{project.description}</p>
                    <div className="flex gap-3">
                        {project.liveLink ? (
                            <a 
                                href={project.liveLink.href} 
                                className="btn btn-sm btn-primary shadow-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="uppercase tracking-wider text-xs">{project.liveLink.displayText}</span>
                            </a>
                        ) : null}
                        <a 
                            href={project.repoLink.href} 
                            className="btn btn-sm shadow-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="uppercase tracking-wider text-xs">{project.repoLink.displayText}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;
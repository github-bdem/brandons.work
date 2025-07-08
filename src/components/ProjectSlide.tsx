import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div id={`slide${index}`} className="cyber-card w-full">
            <div className="flex flex-col h-full">
                <div className="relative overflow-hidden h-48">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                            <span className="text-6xl text-primary/50 font-bold">{project.name.charAt(0)}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-base-100/50"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl mb-4 text-primary">{project.name}</h2>
                    <p className="text-sm mb-6 flex-grow opacity-80">{project.description}</p>
                    <div className="flex gap-3">
                        {project.liveLink ? (
                            <a 
                                href={project.liveLink.href} 
                                className="btn btn-sm btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="uppercase tracking-wider text-xs">{project.liveLink.displayText}</span>
                            </a>
                        ) : null}
                        <a 
                            href={project.repoLink.href} 
                            className="btn btn-sm btn-secondary"
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
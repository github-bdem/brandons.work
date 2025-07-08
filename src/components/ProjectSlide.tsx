import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div id={`slide${index}`} className="tech-card w-full transition-all duration-200">
            <div className="project-id">ID: {String(index + 1).padStart(3, '0')}</div>
            <div className="flex flex-col h-full">
                <div className="relative overflow-hidden h-40">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center relative">
                            <div className="ascii-placeholder">
                                <span className="text-5xl text-amber font-mono opacity-20">[{project.name.charAt(0)}]</span>
                            </div>
                            <div className="scan-overlay"></div>
                        </div>
                    )}
                                    </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-xl mb-3 font-bold uppercase tracking-wider text-amber terminal-text">&gt; {project.name}</h2>
                    <p className="text-sm mb-4 flex-grow opacity-80">{project.description}</p>
                    <div className="flex gap-3">
                        {project.liveLink ? (
                            <a 
                                href={project.liveLink.href} 
                                className="btn btn-sm btn-primary tech-button-small"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="uppercase tracking-wider text-xs">[ {project.liveLink.displayText} ]</span>
                            </a>
                        ) : null}
                        <a 
                            href={project.repoLink.href} 
                            className="btn btn-sm tech-button-small"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="uppercase tracking-wider text-xs">[ {project.repoLink.displayText} ]</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;
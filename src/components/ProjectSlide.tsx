import CFButton from "./CFButton";
import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div
            id={`slide${index}`}
            className="tech-card w-full transition-all duration-200"
        >
            <div className="project-id">
                ID: {String(index + 1).padStart(3, "0")}
            </div>
            <div className="flex h-full flex-col">
                <div className="relative h-32 overflow-hidden">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="relative flex h-full w-full items-center justify-center bg-black">
                            <div className="ascii-placeholder">
                                <span className="text-amber font-mono text-4xl opacity-20">
                                    [{project.name.charAt(0)}]
                                </span>
                            </div>
                            <div className="scan-overlay"></div>
                        </div>
                    )}
                </div>
                <div className="flex flex-grow flex-col p-3">
                    <h2 className="text-amber terminal-text mb-2 text-lg font-bold tracking-wider uppercase">
                        &gt; {project.name}
                    </h2>
                    <p className="mb-3 line-clamp-3 flex-grow text-xs opacity-80">
                        {project.description}
                    </p>
                    <div className="flex gap-2">
                        {project.liveLink ? (
                            <CFButton
                                variant="sm"
                                url={project.liveLink.href}
                                label={project.liveLink.displayText}
                            />
                        ) : null}
                        <CFButton
                            variant="sm"
                            url={project.repoLink.href}
                            label={project.repoLink.displayText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;

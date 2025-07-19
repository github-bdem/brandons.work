import CFButton from "./CFButton";
import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div className="project-card group">
            <div className="project-id">
                {String(index + 1).padStart(3, "0")}
            </div>
            
            <div className="flex flex-col h-full">
                {/* Project Image/Placeholder */}
                <div className="relative h-48 overflow-hidden bg-base-200 border-b border-base-300">
                    {project.previewImageUrl ? (
                        <img
                            src={project.previewImageUrl}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-base-200 to-base-300">
                            <div className="text-6xl font-mono font-bold text-neutral opacity-20">
                                {project.name.charAt(0)}
                            </div>
                        </div>
                    )}
                    
                    {/* Technical overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-6">
                    <h3 className="project-title mb-3">
                        {project.name}
                    </h3>
                    
                    <p className="project-description mb-6 flex-grow">
                        {project.description}
                    </p>
                    
                    {/* Technical divider */}
                    <div className="technical-divider mb-4"></div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col gap-3">
                        {project.liveLink && (
                            <CFButton
                                variant="secondary"
                                url={project.liveLink.href}
                                label={project.liveLink.displayText}
                                buttonType="primary"
                            />
                        )}
                        <CFButton
                            variant="secondary"
                            url={project.repoLink.href}
                            label={project.repoLink.displayText}
                            buttonType="secondary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;
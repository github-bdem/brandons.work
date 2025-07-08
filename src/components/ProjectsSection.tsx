import { Project } from "src/Projects";
import ProjectSlide from "./ProjectSlide";

interface ProjectsSectionProps {
    currentProjects: Project[];
    indexOfFirstProject: number;
    totalPages: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

function ProjectsSection({
    currentProjects,
    indexOfFirstProject,
    totalPages,
    currentPage,
    paginate,
}: ProjectsSectionProps) {
    return (
        <div className="flex h-[100%e] shrink-0 snap-start flex-col p-4">
            <div className="landing-screen mx-auto flex w-full max-w-6xl flex-col pt-8">
                <div className="mb-3 flex justify-start px-4">
                    <div className="terminal-header">
                        <span className="terminal-indicator pulse"></span>
                        <span className="terminal-text">PROJECTS.DISPLAY</span>
                    </div>
                </div>
                <h2
                    className="glitch mb-4 text-center text-2xl font-black tracking-wider md:text-3xl"
                    data-text="PROJECTS"
                >
                    <span className="">PRO</span>
                    <span className="text-secondary">JECTS</span>
                </h2>

                <div className="flex-grow overflow-y-auto px-4">
                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {currentProjects.map((project, index) => {
                            const actualIndex = indexOfFirstProject + index;
                            return (
                                <ProjectSlide
                                    key={`project-${actualIndex}`}
                                    index={actualIndex}
                                    project={project}
                                />
                            );
                        })}
                    </div>
                </div>

                {totalPages > 1 && (
                    <div className="mt-4 flex justify-center gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="btn btn-sm tech-button-small"
                        >
                            &lt;&lt;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`btn btn-sm tech-button-small ${
                                    currentPage === i + 1 ? "btn-primary" : ""
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="btn btn-sm tech-button-small"
                        >
                            &gt;&gt;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectsSection;

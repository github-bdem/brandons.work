import { useState } from "react";
import ProjectSlide from "./components/ProjectSlide";
import projects from "./Projects";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="h-screen snap-y snap-mandatory overflow-y-auto">
            {/* Intro Section - Fullscreen */}
            <div className="h-screen shrink-0 snap-start flex items-center justify-center p-8">
                <div className="max-w-4xl w-full">
                    <h1 className="text-6xl md:text-8xl mb-8 text-primary text-center">{`Brandon's Work`}</h1>
                    <div className="neon-border p-6 mb-12 bg-base-100/50 backdrop-blur">
                        <p className="text-lg leading-relaxed text-center">
                            {`My name is Brandon and I've been doing development
                            since 2012. I specialize in front end engineering
                            and have worked in both startups and corporate
                            environments, led teams and efforts, and have built
                            projects using a wide variety of tools and frameworks.`}
                        </p>
                    </div>
                    
                    <div className="flex gap-6 justify-center">
                        <a className="btn btn-primary" href="#">
                            <span className="uppercase tracking-wider">LinkedIn</span>
                        </a>
                        <a className="btn btn-secondary" href="#">
                            <span className="uppercase tracking-wider">Github</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Projects Section - Fullscreen */}
            <div className="h-screen shrink-0 snap-start flex flex-col p-8">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                    <h2 className="text-4xl md:text-5xl mb-8 text-center text-primary">Projects</h2>
                    
                    <div className="flex-grow overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                        <div className="flex justify-center gap-2 mt-4">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="btn btn-sm"
                            >
                                Previous
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`btn btn-sm ${
                                        currentPage === i + 1 ? 'btn-primary' : ''
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="btn btn-sm"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
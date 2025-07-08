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
        <div className="crt-container">
            <div className="crt-bezel">
                <div className="crt-bezel-inner">
                    <div className="crt-screen">
                        <div className="crt-content">
                            <div className="h-screen snap-y snap-mandatory overflow-y-auto relative z-10 terminal-container">
                                {/* Intro Section - Fullscreen */}
            <div className="h-screen shrink-0 snap-start flex items-center justify-center p-8">
                <div className="max-w-4xl w-full relative">
                    <div className="terminal-header">
                        <span className="terminal-indicator"></span>
                        <span className="terminal-text">SYSTEM.INIT</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl mb-6 text-center font-black tracking-wider glitch" data-text="BRANDON'S WORK">
                        <span className="">BRANDON'S</span>
                        <span className="text-secondary ml-4">WORK</span>
                    </h1>
                    <div className="tech-border p-8 mb-10">
                        <p className="text-base leading-relaxed text-center terminal-text">
                            {`My name is Brandon and I've been doing development
                            since 2012. I specialize in front end engineering
                            and have worked in both startups and corporate
                            environments, led teams and efforts, and have built
                            projects using a wide variety of tools and frameworks.`}
                        </p>
                    </div>
                    
                    <div className="flex gap-6 justify-center">
                        <a className="btn btn-primary tech-button" href="#">
                            <span className="button-corner top-left"></span>
                            <span className="button-corner top-right"></span>
                            <span className="button-corner bottom-left"></span>
                            <span className="button-corner bottom-right"></span>
                            <span className="uppercase tracking-wider">[ LINKEDIN ]</span>
                        </a>
                        <a className="btn btn-secondary tech-button" href="#">
                            <span className="button-corner top-left"></span>
                            <span className="button-corner top-right"></span>
                            <span className="button-corner bottom-left"></span>
                            <span className="button-corner bottom-right"></span>
                            <span className="uppercase tracking-wider">[ GITHUB ]</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Projects Section - Fullscreen */}
            <div className="h-screen shrink-0 snap-start flex flex-col p-8">
                <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
                    <div className="terminal-header mb-6">
                        <span className="terminal-indicator pulse"></span>
                        <span className="terminal-text">PROJECTS.DISPLAY</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl mb-6 text-center font-black tracking-wider glitch" data-text="PROJECTS">
                        <span className="">PRO</span><span className="text-secondary">JECTS</span>
                    </h2>
                    
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
                                className="btn btn-sm tech-button-small"
                            >
                                &lt;&lt;
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`btn btn-sm tech-button-small ${
                                        currentPage === i + 1 ? 'btn-primary' : ''
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
                            </div>
                        </div>
                        <div className="crt-overlay"></div>
                    </div>
                </div>
            </div>
            <div className="crt-speaker-grille"></div>
        </div>
    );
}

export default App;
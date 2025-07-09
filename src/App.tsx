import { useState } from "react";
import ProjectSlide from "./components/ProjectSlide";
import projects from "./Projects";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject,
    );

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="crt-container">
            <div className="crt-bezel">
                <div className="crt-bezel-inner">
                    <div className="crt-screen">
                        <div className="crt-content">
                            <div className="terminal-container relative z-10 h-full snap-y snap-mandatory overflow-y-auto">
                                {/* Intro Section - Fullscreen */}
                                <div className="flex h-full shrink-0 snap-start items-center justify-center p-8">
                                    <div className="relative w-full max-w-4xl">
                                        <div className="terminal-header mb-8">
                                            <span className="terminal-indicator"></span>
                                            <span className="terminal-text">
                                                SYSTEM.INIT
                                            </span>
                                        </div>
                                        <h1
                                            className="glitch mb-6 text-center text-4xl font-black tracking-wider md:text-6xl"
                                            data-text="BRANDON'S WORK"
                                        >
                                            <span className="">{`BRANDON'S`}</span>
                                            <span className="text-secondary ml-4">
                                                WORK
                                            </span>
                                        </h1>
                                        <div className="tech-border mb-10 p-8">
                                            <p className="terminal-text text-center text-base leading-relaxed">
                                                {`Hi, I'm Brandon. With over a decade of experience 
                                                crafting digital experiences, I bring deep expertise 
                                                in front-end engineering to every project. From nimble 
                                                startups to enterprise environments, I've led teams, 
                                                architected solutions, and delivered products that make 
                                                a difference.`}
                                            </p>
                                        </div>

                                        <div className="flex justify-center gap-6">
                                            <a
                                                className="btn btn-primary tech-button"
                                                href="#"
                                            >
                                                <span className="button-corner top-left"></span>
                                                <span className="button-corner top-right"></span>
                                                <span className="button-corner bottom-left"></span>
                                                <span className="button-corner bottom-right"></span>
                                                <span className="tracking-wider uppercase">
                                                    [ LINKEDIN ]
                                                </span>
                                            </a>
                                            <a
                                                className="btn btn-secondary tech-button"
                                                href="#"
                                            >
                                                <span className="button-corner top-left"></span>
                                                <span className="button-corner top-right"></span>
                                                <span className="button-corner bottom-left"></span>
                                                <span className="button-corner bottom-right"></span>
                                                <span className="tracking-wider uppercase">
                                                    [ GITHUB ]
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Projects Section - Fullscreen */}
                                <div className="flex h-full shrink-0 snap-start flex-col p-4">
                                    <div className="mx-auto flex h-full w-full max-w-6xl flex-col pt-8">
                                        <div className="mb-3 flex justify-start px-4">
                                            <div className="terminal-header">
                                                <span className="terminal-indicator pulse"></span>
                                                <span className="terminal-text">
                                                    PROJECTS.DISPLAY
                                                </span>
                                            </div>
                                        </div>
                                        <h2
                                            className="glitch mb-4 text-center text-2xl font-black tracking-wider md:text-3xl"
                                            data-text="PROJECTS"
                                        >
                                            <span className="">PRO</span>
                                            <span className="text-secondary">
                                                JECTS
                                            </span>
                                        </h2>

                                        <div className="flex-grow overflow-y-auto px-4">
                                            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                                {currentProjects.map(
                                                    (project, index) => {
                                                        const actualIndex =
                                                            indexOfFirstProject +
                                                            index;
                                                        return (
                                                            <ProjectSlide
                                                                key={`project-${actualIndex}`}
                                                                index={
                                                                    actualIndex
                                                                }
                                                                project={
                                                                    project
                                                                }
                                                            />
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>

                                        {totalPages > 1 && (
                                            <div className="mt-4 flex justify-center gap-2">
                                                <button
                                                    onClick={() =>
                                                        paginate(
                                                            currentPage - 1,
                                                        )
                                                    }
                                                    disabled={currentPage === 1}
                                                    className="btn btn-sm tech-button-small"
                                                >
                                                    &lt;&lt;
                                                </button>

                                                {Array.from(
                                                    { length: totalPages },
                                                    (_, i) => (
                                                        <button
                                                            key={i + 1}
                                                            onClick={() =>
                                                                paginate(i + 1)
                                                            }
                                                            className={`btn btn-sm tech-button-small ${
                                                                currentPage ===
                                                                i + 1
                                                                    ? "btn-primary"
                                                                    : ""
                                                            }`}
                                                        >
                                                            {i + 1}
                                                        </button>
                                                    ),
                                                )}

                                                <button
                                                    onClick={() =>
                                                        paginate(
                                                            currentPage + 1,
                                                        )
                                                    }
                                                    disabled={
                                                        currentPage ===
                                                        totalPages
                                                    }
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

            {/* Control Panel */}
            <div className="crt-control-panel">
                <div className="control-label">BRIGHTNESS</div>
                <div className="dial">
                    <div className="dial-marker"></div>
                </div>
                <div className="control-label">CONTRAST</div>
                <div className="dial">
                    <div className="dial-marker"></div>
                </div>
            </div>

            {/* Indicator Lights */}
            <div className="crt-indicators">
                <div className="indicator-group">
                    <div className="indicator-light power active"></div>
                    <span className="indicator-label">PWR</span>
                </div>
                <div className="indicator-group">
                    <div className="indicator-light signal pulse"></div>
                    <span className="indicator-label">SIG</span>
                </div>
                <div className="indicator-group">
                    <div className="indicator-light standby"></div>
                    <span className="indicator-label">STBY</span>
                </div>
            </div>
        </div>
    );
}

export default App;

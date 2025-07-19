import ProjectSlide from "./components/ProjectSlide";
import TerminalPageIndicator from "./components/TerminalPageIndicator";
import CFButton from "./components/CFButton";
import projects from "./Projects";

function App() {
    const currentProjects = projects;

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <section className="technical-hero technical-grid">
                <div className="technical-container">
                    <div className="mb-8">
                        <TerminalPageIndicator pageTitle="SYSTEM.INIT" />
                    </div>
                    
                    <div className="max-w-4xl">
                        <h1 className="mb-8 font-black tracking-tight">
                            <span className="block text-primary">BRANDON'S</span>
                            <span className="block text-secondary ml-8">WORK</span>
                        </h1>
                        
                        <div className="card max-w-3xl mb-12 p-8">
                            <p className="text-lg leading-relaxed text-neutral">
                                With over a decade of experience crafting digital experiences, 
                                I bring deep expertise in front-end engineering to every project. 
                                From nimble startups to enterprise environments, I've led teams, 
                                architected solutions, and delivered products that make a difference.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <CFButton
                                url="https://www.linkedin.com/in/b-demello"
                                label="LINKEDIN"
                            />
                            <CFButton
                                url="https://github.com/github-bdem/"
                                label="GITHUB"
                                variant="secondary"
                            />
                            <CFButton
                                url="https://medium.com/@bdemello.dev"
                                label="MEDIUM"
                                variant="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="technical-section bg-base-200">
                <div className="technical-container">
                    <div className="mb-8 flex justify-between items-center">
                        <TerminalPageIndicator pageTitle="PROJECTS.DISPLAY" />
                        <div className="nav-dots">
                            <div className="nav-dot active"></div>
                            <div className="nav-dot"></div>
                            <div className="nav-dot"></div>
                        </div>
                    </div>
                    
                    <h2 className="mb-12 text-center">
                        <span className="text-primary">PRO</span>
                        <span className="text-secondary">JECTS</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {currentProjects.map((project, index) => (
                            <ProjectSlide
                                key={`project-${index}`}
                                index={index}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="technical-section border-t border-base-300">
                <div className="technical-container">
                    <div className="flex justify-between items-center text-sm text-neutral">
                        <div className="font-mono">© 2025 BRANDON'S WORK</div>
                        <div className="flex items-center gap-2">
                            <div className="technical-indicator active"></div>
                            <span className="font-mono text-xs">SYSTEM.ONLINE</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
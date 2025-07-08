import ProjectSlide from "./components/ProjectSlide";
import projects from "./Projects";

function App() {
    return (
        <>
            <div className="scan-line"></div>
            <div className="h-screen snap-y snap-mandatory flex-col overflow-y-auto relative">
                <div className="h-full shrink-0 snap-start flex items-center justify-center p-8">
                    <div className="max-w-4xl w-full">
                        <h1 className="text-6xl md:text-8xl mb-8 gradient-text glitch">{`Brandon's Work`}</h1>
                        <div className="neon-border p-6 mb-8 bg-base-100/50 backdrop-blur">
                            <p className="text-lg leading-relaxed">
                                {`My name is Brandon and I've been doing development
                                since 2012. I specialize in front end engineering
                                and have worked in both startups and corporate
                                environments, led teams and efforts, and have built
                                projects using a wide variety of tools and frameworks.`}
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <a className="btn btn-primary neon-glow" href="#">
                                <span className="uppercase tracking-wider">LinkedIn</span>
                            </a>
                            <a className="btn btn-secondary neon-glow" href="#">
                                <span className="uppercase tracking-wider">Github</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-full shrink-0 snap-start p-8">
                    <h2 className="text-4xl md:text-6xl mb-8 text-center neon-glow text-primary">Projects</h2>
                    <div className="flex h-full w-full flex-wrap gap-4 justify-center">
                        {projects.map((project, index: number) => {
                            return (
                                <ProjectSlide
                                    key={`item-${index}`}
                                    index={index}
                                    project={project}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="h-full shrink-0 snap-start p-8">
                    <h2 className="text-4xl md:text-6xl mb-8 text-center neon-glow text-accent">More Projects</h2>
                    <div className="flex h-full w-full flex-wrap gap-4 justify-center">
                        {projects.map((project, index: number) => {
                            return (
                                <ProjectSlide
                                    key={`item2-${index}`}
                                    index={index}
                                    project={project}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
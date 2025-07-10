import ProjectSlide from "./components/ProjectSlide";
import TerminalPageIndicator from "./components/TerminalPageIndicator";
import CFButton from "./components/CFButton";
import projects from "./Projects";
import CRTSpeakerGrille from "./components/CRTSpeakerGrille";
import CRTIndicators from "./components/CRTIndicators";

function App() {
    const currentProjects = projects;

    return (
        <div className="crt-container">
            <div className="crt-bezel">
                <CRTSpeakerGrille />
                <CRTIndicators />
                <div className="crt-bezel-inner">
                    <div className="crt-screen">
                        <div className="crt-content">
                            <div className="terminal-container relative z-10 h-full snap-y snap-mandatory overflow-y-auto">
                                <div className="flex h-full shrink-0 snap-start flex-col items-center justify-center p-8">
                                    <div className="absolute top-12 left-8">
                                        <TerminalPageIndicator pageTitle="SYSTEM.INIT" />
                                    </div>
                                    <div className="relative w-full max-w-4xl">
                                        <h1
                                            className="glitch mb-6 hidden flex-col text-center text-4xl font-black tracking-wider md:block md:text-6xl"
                                            data-text="BRANDON'S WORK"
                                        >
                                            <span className="">{`BRANDON'S`}</span>
                                            <span className="text-secondary ml-4">
                                                WORK
                                            </span>
                                        </h1>
                                        <h1
                                            className="glitch mb-6 flex flex-row justify-center text-center text-4xl font-black tracking-wider md:hidden md:text-6xl"
                                            data-text="B.WORK"
                                        >
                                            <span className="">{`B`}</span>
                                            <span className="text-secondary">
                                                .WORK
                                            </span>
                                        </h1>
                                        <div className="tech-border mb-10 hidden p-8 md:block">
                                            <p className="terminal-text text-center text-base leading-relaxed">
                                                {`Hi, I'm Brandon. With over a decade of experience 
                                                crafting digital experiences, I bring deep expertise 
                                                in front-end engineering to every project. From nimble 
                                                startups to enterprise environments, I've led teams, 
                                                architected solutions, and delivered products that make 
                                                a difference.`}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center gap-6 md:flex-row">
                                            <CFButton
                                                url="https://www.linkedin.com/in/b-demello"
                                                label="LINKEDIN"
                                            />
                                            <CFButton
                                                url="https://https://github.com/github-bdem/"
                                                label="GITHUB"
                                            />
                                            <CFButton
                                                url="https://medium.com/@bdemello.dev"
                                                label="MEDIUM"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Projects Section - Fullscreen */}
                                <div className="flex h-full shrink-0 snap-start flex-col p-4">
                                    <div className="mx-auto flex h-full w-full max-w-6xl flex-col pt-8">
                                        <div className="mb-3 flex justify-start px-4">
                                            <TerminalPageIndicator pageTitle="PROJECTS.DISPLAY" />
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
                                            <div className="mb-6 grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
                                                {currentProjects.map(
                                                    (project, index) => {
                                                        return (
                                                            <ProjectSlide
                                                                key={`project-${index}`}
                                                                index={index}
                                                                project={
                                                                    project
                                                                }
                                                            />
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="crt-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

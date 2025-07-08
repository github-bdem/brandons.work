import ProjectSlide from "./components/ProjectSlide";
import projects from "./Projects";

function App() {
    return (
        <div className="h-screen snap-y snap-mandatory flex-col overflow-y-auto">
            <div className="h-full shrink-0 snap-start">
                <h1 className="text-primary text-4xl">{`Brandon's Work`}</h1>
                <p className="mb-5 md:w-1/2">
                    {`My name is Brandon and I've been doing development
                            since 2012. I specialize in front end engineering
                            and have worked in both startups and corporate
                            environments, led teams and efforts, and have built
                            projects using a wide variety of tools and frameworks.`}
                </p>
                <div className="flex flex-col">
                    <a className="link">LinkedIn</a>
                    <a className="link">Github</a>
                </div>
            </div>

            <div className="h-full shrink-0 snap-start">
                <div className="flex h-full w-full flex-wrap gap-2 p-2">
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

            <div className="h-full shrink-0 snap-start">
                <div className="flex h-full w-full flex-wrap gap-2 p-2">
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
        </div>
    );
}

export default App;

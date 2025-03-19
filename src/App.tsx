import ProjectSlide from "./components/ProjectSlide";
import projects from "./Projects";

function App() {
    return (
        <div className="h-screen snap-y snap-mandatory flex-col overflow-y-auto">
            <div className="h-full shrink-0 snap-start bg-green-300 p-4">
                <div className="flex size-full items-end justify-end border-2">
                    <h1 className="mr-2 mb-2 text-4xl font-semibold">
                        Brandons.Work
                    </h1>
                </div>
            </div>

            <div className="h-full shrink-0 snap-start">
                <div className="carousel h-full w-full">
                    {projects.map((project, index: number) => {
                        console.log(index);
                        console.log(projects.length);
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
            <div className="flex h-full shrink-0 snap-start items-center justify-center bg-purple-300 align-middle">
                <div className="card bg-base-100 m-4 flex flex-col p-4 md:m-0 md:w-1/2 md:flex-row">
                    <p className="mb-5 md:w-1/2">
                        {`My name is Brandon and I've been doing development
                            since 2012. I specialize in front end engineering
                            and have worked in both startups and corporate
                            environments, led teams and efforts, and have built
                            projects using a wide variety of tools and frameworks.`}
                    </p>
                    <div className="divider divider-horizontal" />
                    <div className="flex flex-col md:w-1/2">
                        <p className="mb-2">
                            {`If you're interested in contacting me feel free to message me at the urls below.`}
                        </p>
                        <div className="flex flex-col">
                            <a className="link">LinkedIn</a>
                            <a className="link">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

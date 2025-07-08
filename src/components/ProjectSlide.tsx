import { Project } from "src/Projects";

interface ProjectSlideProps {
    index: number;
    project: Project;
}

function ProjectSlide({ index, project }: ProjectSlideProps) {
    return (
        <div id={`slide${index}`} className="card bg-base-300">
            <div className="flex flex-col">
                {project.previewImageUrl ?? (
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                )}
                <div className="flex flex-col">
                    <h2 className="text-2xl">{project.name}</h2>
                    {project.liveLink ? (
                        <a href={project.liveLink.href} className="link">
                            {project.liveLink.displayText}
                        </a>
                    ) : null}
                    <a href={project.repoLink.href} className="link">
                        {project.repoLink.displayText}
                    </a>
                </div>
            </div>
            <div className="p-4">{project.description}</div>
        </div>
    );
}

export default ProjectSlide;

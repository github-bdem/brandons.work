interface ProjectLink {
    displayText: string;
    href: string;
}

interface Project {
    id: string;
    name: string;
    description: string;
    previewImageUrl: string;
    repoLink: ProjectLink;
    liveLink?: ProjectLink;
}

const projects = [
    {
        id: "766dda39-6c26-4ed1-87a2-fc84a4d8fa1b",
        name: "Food Roulette",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nunc vitae blandit mattis. Curabitur non gravida nisi. Nam non mi augue. Donec pretium tortor id tellus blandit, ut congue metus laoreet. Nam laoreet aliquet elementum. Maecenas in ipsum tortor. Quisque id tristique dolor, non feugiat elit. ",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
        liveLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
    },
    {
        id: "3c67f930-7e99-44e5-8643-7a33dce15266",
        name: "Food Roulette",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nunc vitae blandit mattis. Curabitur non gravida nisi. Nam non mi augue. Donec pretium tortor id tellus blandit, ut congue metus laoreet. Nam laoreet aliquet elementum. Maecenas in ipsum tortor. Quisque id tristique dolor, non feugiat elit. ",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
        liveLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
    },
    {
        id: "621331de-1e70-4e4f-b9d4-314386dbe811",
        name: "Food Roulette",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nunc vitae blandit mattis. Curabitur non gravida nisi. Nam non mi augue. Donec pretium tortor id tellus blandit, ut congue metus laoreet. Nam laoreet aliquet elementum. Maecenas in ipsum tortor. Quisque id tristique dolor, non feugiat elit. ",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
        liveLink: {
            displayText: "Github",
            href: "wwww.github.com",
        },
    },
] as Project[];

export default projects;

export type { Project };

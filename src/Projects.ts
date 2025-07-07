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
        id: "72660e92-7fdc-4739-9dc0-beef37719f4a",
        name: "Vite React Tailwind Project Template",
        description: `Template repository branched from Food-Roulette project.  Contains all the project structure, linting, tooling, etc. that I prefer when building out a site.`,
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "https://github.com/github-bdem/vite-react-tailwind-project-template",
        },
    },
    {
        id: "766dda39-6c26-4ed1-87a2-fc84a4d8fa1b",
        name: "Food Roulette",
        description: `Improved food finding web app written in TS, React, and Tailwind.  This project was an extension of the older 'Goto.pizza'`,
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "https://github.com/github-bdem/food-roulette",
        },
        liveLink: {
            displayText: "Food Roulette",
            href: "https://www.food-roulette.app/",
        },
    },
    {
        id: "3c67f930-7e99-44e5-8643-7a33dce15266",
        name: "Goto.pizza",
        description:
            "Fun Google maps based toy project built in react/JS.  I had bought the url 'goto.pizza' and figured I may as well do something with it, and thus this site was born.",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "https://github.com/github-bdem/goto.pizza",
        },
    },
    {
        id: "534589e2-7d86-4761-a4df-a7496baf1c18",
        name: "OS Input Capture",
        description:
            "Node.js keyboard, mouse, and screen capture and logging utility for linux.",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "https://github.com/github-bdem/os-input-capture",
        },
    },
    {
        id: "621331de-1e70-4e4f-b9d4-314386dbe811",
        name: "PyPWA",
        description:
            "A python based software framework designed to perform Partial Wave and Amplitude Analysis with the goal of extracting resonance information from multi-particle final states.",
        previewImageUrl: "",
        repoLink: {
            displayText: "Github",
            href: "https://github.com/JeffersonLab/PyPWA",
        },
        liveLink: {
            displayText: "JLAB Project Page",
            href: "https://www.jlab.org/pypwa",
        },
    },
] as Project[];

export default projects;

export type { Project };

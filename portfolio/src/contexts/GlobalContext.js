import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
        {
            id: 2,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
        {
            id: 3,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
        {
            id: 4,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
        {
            id: 5,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
        {
            id: 6,
            name: 'EM BREVE',
            description: 'This project was developed using react framework!',
            githubLink: 'project-example.github.com',
            linkDeploy: 'project-example.com'
        },
    ]);

    return (
        <GlobalContext.Provider
            value={{ openMenu, setOpenMenu, projects }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => {
    return useContext(GlobalContext);
};
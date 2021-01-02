
export const setActiveContent = (projects, selectedProject, selectedNode) => {
    const contentItem = projects[selectedProject].content.find(
        content => 
        content.key===selectedNode);

    if (contentItem) {
        return contentItem.value;
    } 
    return '';
};

export const updateContent = (projects, selectedProject, selectedNode, newContent) => {
    const contentItem = projects[selectedProject].content.find(
        content => 
        content.key===selectedNode);
        if (contentItem) {
       const contentlist = projects[selectedProject].content.map(content=>
        content.key===selectedNode ? {...content, value: newContent}
        : {...content});
        const newProjectList = projects.map(project=> project.id = selectedProject ? 
            {...project, content: contentlist} :
        {...project});
        return newProjectList;
        }
    return projects;
};

export const updateProjectTree = (projects, selectedProject, newTree) => {
    const projectExists = projects.find(
        project => 
        project.key===selectedProject);

    if (projectExists) {        
       return projects = projects.map(project=> 
        project.key===selectedProject ? {...project, tree: newTree}
        : {...project}
        ) 
    } 
    return projects;
};


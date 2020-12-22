// Called from reducer when add item action is triggered
export const setActiveContent = (contents, selectedNode) => {
    const contentItem = contents.find(
        content => 
        content.key===selectedNode);

    if (contentItem) {
        return contentItem.value;
    } 
    return '';
};


export const updateContent = (contents, selectedNode, newContent) => {
    const contentItem = contents.find(
        content => 
        content.key===selectedNode);

    if (contentItem) {
       return newContent = contents.map(content=>
        content.key===selectedNode ? {...content, value: newContent}
        : {...content}
        ) 
    } 
    return contents;
};
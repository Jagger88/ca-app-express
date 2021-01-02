// this should either add or update content if it finds the node
export const updateNodeContent = (nodes, nodeToUpdate) => {
    const existingNode = nodes.find(
        node => node.id===nodeToUpdate.id
        );

    if (existingNode) {
        return nodes.map(node=>
            node.id===nodeToUpdate.id
                ? {...node, content: nodeToUpdate.content}
                : {...node}
        )
    } else {
    return [...nodes,  {...nodeToUpdate}]
    }
};


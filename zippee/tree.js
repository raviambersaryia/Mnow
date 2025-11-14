// =========================
// Load Saved Tree
// =========================
let treeData = JSON.parse(localStorage.getItem("savedTree")) || {
    id: Date.now(),
    name: "Root",
    children: []
};

// =========================
// Save to LocalStorage
// =========================
function saveTree() {
    localStorage.setItem("savedTree", JSON.stringify(treeData));
}

// =========================
// Add Child Node
// =========================
function addNode(parentId) {
    function find(node) {
        if (node.id === parentId) return node;
        for (let child of node.children) {
            const found = find(child);
            if (found) return found;
        }
        return null;
    }

    const parent = find(treeData);

    parent.children.push({
        id: Date.now(),
        name: "Node",
        children: []
    });

    saveTree();
    renderTree();
}

// =========================
// Remove Node
// =========================
function removeNode(nodeId) {
    if (nodeId === treeData.id) {
        alert("Cannot delete root node!");
        return;
    }

    function deleteRec(node, id) {
        node.children = node.children.filter(child => child.id !== id);
        node.children.forEach(child => deleteRec(child, id));
    }

    deleteRec(treeData, nodeId);
    saveTree();
    renderTree();
}

// =========================
// Update Node Name
// =========================
function updateNode(id, value) {
    function find(node) {
        if (node.id === id) {
            node.name = value;
            return;
        }
        node.children.forEach(find);
    }

    find(treeData);
    saveTree();
}

// =========================
// Render Tree
// =========================
function renderTree() {
    const container = document.getElementById("treeContainer");
    container.innerHTML = "";

    function createNode(node) {
        const div = document.createElement("div");
        div.className = "node";

        div.innerHTML = `
            <input value="${node.name}" onchange="updateNode(${node.id}, this.value)">
            <br>
            <button onclick="addNode(${node.id})">Add Child</button>
            <button class="removeBtn" onclick="removeNode(${node.id})">Remove</button>
        `;

        const childrenDiv = document.createElement("div");
        childrenDiv.className = "children";

        node.children.forEach(child => {
            childrenDiv.appendChild(createNode(child));
        });

        div.appendChild(childrenDiv);
        return div;
    }

    container.appendChild(createNode(treeData));
}

// Initial Render
renderTree();

// =========================
// Reset Tree Button
// =========================
document.getElementById("resetTree").onclick = () => {
    if (confirm("Reset entire tree?")) {
        treeData = {
            id: Date.now(),
            name: "Root",
            children: []
        };
        saveTree();
        renderTree();
    }
};

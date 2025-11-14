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

        const input = document.createElement('input');
        input.value = node.name || '';
        input.addEventListener('change', function() { updateNode(node.id, this.value); });
        div.appendChild(input);

        div.appendChild(document.createElement('br'));

        const addBtn = document.createElement('button');
        addBtn.title = 'Add Child';
        addBtn.innerText = '';
        addBtn.className = 'no-export';
        addBtn.addEventListener('click', function() { addNode(node.id); });
        div.appendChild(addBtn);

        const removeBtn = document.createElement('button');
        removeBtn.title = 'Remove Node';
        removeBtn.innerText = '';
        removeBtn.className = 'removeBtn no-export';
        removeBtn.addEventListener('click', function() { removeNode(node.id); });
        div.appendChild(removeBtn);

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


// =========================
// Download PDF (Improved Version)
// =========================
document.getElementById("downloadPDF").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;

    const element = document.getElementById("treeContainer");

    // Hide interactive controls before capture
    document.body.classList.add('exporting');

    // preserve previous inline styles to restore later
    const prevWidth = element.style.width || '';
    const prevTransform = element.style.transform || '';

    // expand to full scroll width so canvas captures everything
    element.style.width = element.scrollWidth + 'px';
    element.style.transform = 'scale(1)';
    element.style.transformOrigin = 'top left';

    try {
        const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: null });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // calculate image height in PDF units
        const imgProps = pdf.getImageProperties(imgData);
        const pdfImgHeight = (imgProps.height * pageWidth) / imgProps.width;

        let heightLeft = pdfImgHeight;
        let position = 0;

        // add first page
        pdf.addImage(imgData, 'PNG', 0, position, pageWidth, pdfImgHeight);
        heightLeft -= pageHeight;

        // add remaining pages
        while (heightLeft > 0) {
            position = heightLeft - pdfImgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pageWidth, pdfImgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save('tree-structure.pdf');
    } catch (err) {
        console.error('PDF generation error', err);
        alert('Error generating PDF: ' + (err && err.message ? err.message : err));
    } finally {
        // restore UI and styles
        document.body.classList.remove('exporting');
        element.style.width = prevWidth;
        element.style.transform = prevTransform;
    }
});

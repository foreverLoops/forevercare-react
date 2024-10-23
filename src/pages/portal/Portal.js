const contentMap = {
    notice: notice,
    clinicalSummary: clinicalSummary,
    documents: documents,
    medications: medications,
    timeline: timeline,
};

// Initial display
display.innerHTML = contentMap.notice;

const updateDisplay = (contentKey) => {
    if (contentMap[contentKey]) {
        display.innerHTML = contentMap[contentKey];
    } else {
        display.innerHTML = "<p>Content not available.</p>";
    }
};

// Event listeners
rightSidebarLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        const contentKeys = Object.keys(contentMap);
        if (contentKeys[index]) {
            updateDisplay(contentKeys[index]);
        }
    });
});

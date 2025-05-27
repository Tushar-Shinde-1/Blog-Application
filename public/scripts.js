function toggle(index) {
    const contentDiv = document.getElementById("content-" + index);
    if (contentDiv.style.display === "none" || contentDiv.style.display === "") {
        contentDiv.style.display = "block"; // Show content
    } else {
        contentDiv.style.display = "none"; // Hide content
    }
}

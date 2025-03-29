document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById("project-list");

            projects.forEach(project => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;

                projectList.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});

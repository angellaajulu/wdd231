const courses = [
    { code: "CSE 110", name: "Intro to Programming", credits: 2, completed: true },
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { code: "WDD 231", name: "Frontend Web Development", credits: 2, completed: false }
];

const container = document.getElementById("courses");
const creditSpan = document.getElementById("credits");

function displayCourses(list) {
    container.innerHTML = "";
    let totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
    creditSpan.textContent = totalCredits;

    list.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");
        if (course.completed) div.classList.add("completed");

        div.innerHTML = `<strong>${course.code}</strong> - ${course.name}`;
        container.appendChild(div);
    });
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter === "wdd") {
            displayCourses(courses.filter(c => c.code.startsWith("WDD")));
        } else if (filter === "cse") {
            displayCourses(courses.filter(c => c.code.startsWith("CSE")));
        } else {
            displayCourses(courses);
        }
    });
});
const inp = document.querySelector("input");
const categoryInp = document.querySelector("select");
const btn = document.querySelector("#add");
const toDoBox = document.querySelector(".to-do-list");

btn.addEventListener("click", () => {
    toDoBox.style.backgroundColor = "whitesmoke";

    const value = inp.value;
    const category = categoryInp.value;

    if (value.trim() === "") 
        return;

    const toDoItem = document.createElement("div");
    toDoItem.classList.add("li");

    toDoItem.innerHTML = 
    `
        <div class="toDoItem-1">
            <input class="input-checkbox" type="checkbox"/>
            <span class="category-span ${category}">${category}</span>
            <h3>${value}</h3>
        </div>
        <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
        </div>
    `

    toDoBox.appendChild(toDoItem);

    inp.value = "";
});

toDoBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        e.target.closest(".li").remove();
    }

    if (e.target.classList.contains("edit")) {
        const task = e.target.closest(".li");
        const title = task.querySelector("h3");

        const currTask = title.textContent;

        title.innerHTML = 
        `
            <input type="text" value="${currTask}" class="edit-input">
        `;

        const input = title.querySelector("input");
        input.focus();

        input.addEventListener("blur", () => {
            title.textContent = input.value.trim() || currTask;
        });

        input.addEventListener("keydown", (e) => {
            if (e.key == "Enter") 
                title.textContent = input.value.trim() || currTask;
        });
    }

    if (e.target.classList.contains("input-checkbox")) {
        const currTask = e.target.closest(".li");

        if (e.target.checked) {
            toDoBox.removeChild(currTask);
            toDoBox.append(currTask);
        }

        else {
            toDoBox.removeChild(currTask);
            toDoBox.prepend(currTask);
        }
    }
});
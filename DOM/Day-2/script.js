const bulb = document.querySelector(".bulb");

// console.log(bulb);

const btn = document.querySelector("button");

// console.log(btn);

/*
let flag = true;

btn.addEventListener('click', () => {
    // console.log("I am triggered!");

    if (flag) {
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "Off";
        flag = false;
    }
    
    else {
        bulb.style.backgroundColor = "transparent";
        btn.textContent = "On";
        flag = true;
    }
});
*/

btn.addEventListener('click', () => {
    if (bulb.classList.toggle('lightUp'))
        btn.textContent = 'Off';
    else
        btn.textContent = 'On';
});

// console.log(document);

// console.log(document.childNodes);

// const body = document.body;

// console.log(body.childNodes);

// console.log(body.children);

// const main = document.querySelector("main");

// console.log(main.childNodes);

// console.log(main.children);

// const h1 = document.querySelector("h1");

// h1.textContent = "Updated";

// h1.innerText = "<i>Updated</i>"

// h1.innerHTML = "<i>Updated</i>"

// console.log(h1);

// const body = document.querySelector("body");

// console.log(body.innerText);

// console.log(body.textContent);

// body.style.backgroundColor = "red";

// h1.style.color = "red";
// h1.style.fontSize = "50px";
// h1.style.fontStyle = "italic";

// const h1 = document.querySelector("#head1");

// h1.textContent = "Updated!"; 

// const isClass = h1.classList.contains("heading");
// const isClass = h1.classList.contains("headingg");

// h1.classList.replace("heading", "newHead");

// h1.classList.toggle("heading");
// h1.classList.toggle("headingg");

// h1.classList.remove("heading");

// console.log(isClass);

// const div = document.querySelector("#div");

// div.classList.add("box");
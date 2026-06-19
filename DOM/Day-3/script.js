// const h3 = document.querySelector("#id1");

// let res = h3.getAttribute("id");
// let res = h3.getAttribute("class");

// h3.setAttribute("width", "200");
// let res = h3.getAttribute("width");

// h3.removeAttribute("class");
// h3.hasAttribute("class");
// let res = h3.getAttribute("class");


// const userCard = document.querySelector("#user_card");

// userCard.dataset.userId = "678";

// console.log(userCard.getAttribute("data-user-id"));

// const inp = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
    //    console.log(inp.value);
    //    console.log(inp.getAttribute("value"));
//    }
// );

// let footer = document.createElement('footer');
// console.log(footer);

// const main = document.querySelector('main');

// const span = document.createElement('span');

// span.innerHTML = '<i>Dynamic</i>';

// document.body.appendChild(footer);

// main.appendChild(footer);
// main.appendChild(span);

// main.append(footer, span);

// main.removeChild(span);

const main = document.querySelector('main');

// const box1 = document.querySelector('.box1');
// const box2 = document.querySelector('.box2');
// const box3 = document.querySelector('.box3');

// box2.style.backgroundColor = "yellow";
// box3.style.backgroundColor = "blue";

// main.insertBefore(box2, box1);

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box2.classList.add("box");
box3.classList.add("box");

main.append(box1, box2);

box2.style.backgroundColor = "yellow";
box3.style.backgroundColor = "blue";

// main.prepend(box3);

// box1.before(box2);

// box2.after(box1);

// box1.replaceWith(box3);

main.replaceChild(box3, box1);
// React-0

/*
let obj = {
    name: "ABC",
    age: 20,
    company: "XYZ",
    address: "PQR",
}

let fn = ({name, company}) => {
    console.log(name, company);
}

fn(obj);


let a = 990;

let print = () => {
    console.log(a);
}

let ab = () => {
    let a = 80;

    print();
}

ab();
*/

// console.log(window); // window comes from browser

// React integrated in JS
console.log(React);

// RDOM
let h1 = document.createElement("h1");
h1.classList.add("box");
h1.textContent = "Hello";
// document.body.append(h1);

// React.createElement - 3 arguments - tag, props (attributes, properties, arguments) --- can have null, children (text content, innerHTML etc) 
// children is under props
// whatever under tag - udner props
/* 
let rh1 = React.createElement(
    "h1", 
    {class: "box"}, 
    "Hello, I am from React!"
);
*/

let rh1 = React.createElement(
    "h1", 
    {className: "box"}, 
    React.createElement("span", {}, "I am under <h1>!")
);

// document.body.append(rh1); --- not able to parse

// entry of React Element into RDOM
// React DOM tells RDOM how to keep these elements
// console.log(ReactDOM);
// root is element from real DOM 
// let root = document.querySelector("#root");
// let rootOfReact = ReactDOM.createRoot(root);
// rootOfReact.render(rh1);

// console.log("RDOM:", h1);
// console.log("React DOM:", rh1);

import {a, sum} from "./a.js";
console.log(a);

let result = sum(50, 10);
console.log(result);

// ESM File --- can work with imports and exports

/* 
let div = React.createElement(
    "div",
    {},
    // "I am div!"
    React.createElement(
        "h1",
        {},
        // "I am h1!",
        React.createElement(
            "span",
            {},
            "I am in span!"
        )
    )
);
*/

let div = React.createElement(
    "div",
    {},
    [
        React.createElement(
            "h1",
            {key: "h1"},
            React.createElement(
                "span",
                {},
                "I am in span in h1!"
            )
        ),
        React.createElement(
            "h2",
            {key: "h2"},
            React.createElement(
                "span",
                {},
                "I am in span in h2!"
            )
        )
    ]
);

let root = document.querySelector("#root");
ReactDOM.createRoot(root).render(div);

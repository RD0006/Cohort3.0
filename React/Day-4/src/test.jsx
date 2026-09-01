// file - object 

// key and value
export const one = () => {
    console.log("1");
}

export const two = () => {
    console.log("2");
}

const three = () => {
    console.log("3");
}

export const four = () => {
    console.log("4");
}

// only one default export per file
export default three;
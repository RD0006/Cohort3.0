import { React, useRef, useState } from 'react'

const Form = () => {

    // synchronous code

    console.log("Re-rendering");
    
    const formRef = useRef({});
    
    const [products, setProducts] = useState({});

    console.log(products);

    // const [formData, setFormData] = useState({});

    // Real DOMs have lowercase attributes - Virtual DOMs have camelCase attributes

    // re-rendering on each change - problem as continuous re-rendering
    // use input reference ref
    // ref gives element like real DOM - core reference
    // useRef is a hook that points to real DOM element

    // Synthetic Base Events 

    // Real DOM - document.createElement
    // Virtual DOM - React.createElement

    // to fetch Real DOM - use useRef
    // this is a hook - used to fetch Real DOM element

    // Real DOM contains document, events, APIs 
    // Virtual DOM - events wrapped - called Synthetic Events --- these are light-weight
    // ref - gives Real DOM element

    // objective: fetch Real DOM and its events - done using useRef hook
    // events wrapped as Synthetic Events
    // useRef used for Real DOM events

    // comparison 
    //  RDOM        VDOM
    //  Event       Synthetic Event 
    //              (Event Wrapped)

    // useRef is used to fetch from RDOM

    // too many re-renderings - bad code


    // when more than 1 - pass object
    // let inpRef = useRef();
    // let inpRef = useRef(10);
    // console.log(inpRef);
    // can store multiple references - so current to know which one is current

    // how to get input data without re-rendering

    let submitAction = (e) => {
        e.preventDefault();
        // console.log(formRef);
        // console.log(formRef.current.productName.value);
        // console.log(formRef.current.price.value);
        // console.log(formRef.current.category.value);
        // console.log(formRef.current.image.value);

        let obj = {
        pName: formRef.current.productName.value,
        price: formRef.current.price.value,
        category: formRef.current.category.value,
        image: formRef.current.image.value
    }

        setProducts(obj);
        
        // no extra re-rendering 
    }


    

    // formRef.current key : value pair

    // ref has a callback that stores element in it

    // can have multiple useRefs or a single one 

  // asynchronous code
  return (
    <div className="w-80 h-80">
      <form onSubmit={submitAction} className="flex p-6 rounded bg-white flex-col gap-4">

        <input ref={(e) => formRef.current.productName = e} type="text" className="p-2 border border-gray-400 rounded" placeholder="Product Name" />

        <input ref={(e) => formRef.current.price = e} type="text" className="p-2 border border-gray-400 rounded" placeholder="Price" />

        <span>Select Category</span>
        <select ref={(e) => formRef.current.category = e} className="p-2 border border-gray-400 rounded">
            <option value="MEN'S">Men's</option>
            <option value="WOMEN'S">Women's</option>
            <option value="KIDS'">Kids'</option>
        </select>

        <input ref={(e) => formRef.current.image = e} type="text" className="p-2 border border-gray-400 rounded" placeholder="Image" />

        <button className="p-2 bg-blue-600 text-white">CREATE</button>
      </form>
    
        <br/><br/>
      <h1>{products.pName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>


      {/* state formation not required */}
      {/*<input ref={inpRef} type="text" placeholder="Something..." /> 
      <button onClick={() => console.log(inpRef.current.value)}>Submit</button>*/}
    </div>
  )
}

export default Form
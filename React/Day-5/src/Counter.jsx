import React, {useState} from 'react'

const Counter = () => {
    console.log("Counter is re-rendering...");
    let [count, setCount] = useState(0);

    return (
        
        <div>

            <h1>Count is {count}</h1>
            <button onClick={() => {
                // setCount(count + 1);
                // setCount(count + 1);
                // setCount(count + 1);
                
                // setFunction has previous, i.e., default state

                // setCount(count++);
                // setCount(count++);
                // setCount(count++);
                // setCount(count++);

                setCount((prev) => prev + 1);
                setCount((prev) => prev + 1);
                setCount((prev) => prev + 1);

            }}>
                Increment
            </button>   
        </div>
    )
}

export default Counter
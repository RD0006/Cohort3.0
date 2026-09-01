import React, { useRef } from 'react'
import Form from './components/Form'
import RHF from './components/RHF'

const App = () => {
  // console.log("Re-rendering");
  
  let inpRef = useRef();
  console.log(inpRef);
  return (

    <div className="h-110 w-150 bg-gray-300 p-5">
      {/*<Form/>*/}

      <RHF />

      {/* state formation not required */}
      {/*<input ref={inpRef} type="text" placeholder="Something..." /> 
      <button onClick={() => console.log(inpRef.current.value)}>Submit</button>*/}
    </div>
  )
}

export default App
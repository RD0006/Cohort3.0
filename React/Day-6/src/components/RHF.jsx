import React from 'react'

import { useForm } from "react-hook-form"; 

const RHF = () => {

    // let data = useForm();
    // console.log(data);
    // RHF - 2 re-renders : JS + self

    const {register, handleSubmit, reset, formState: {errors}, } = useForm();
  return (
    <div className="w-80 h-80">
      <form 
        className="flex p-6 rounded bg-white flex-col gap-4"
    >

        <input 
            type="text" 
            className="p-2 border border-gray-400 rounded" 
            placeholder="Product Name" 
        />

        <input 
            type="text" 
            className="p-2 border border-gray-400 rounded" 
            placeholder="Price" 
        />

        <span>Select Category</span>
        <select className="p-2 border border-gray-400 rounded">
            <option value="MEN'S">Men's</option>
            <option value="WOMEN'S">Women's</option>
            <option value="KIDS'">Kids'</option>
        </select>

        <input 
            type="text" 
            className="p-2 border border-gray-400 rounded" 
            placeholder="Image" 
        />

        <button className="p-2 bg-blue-600 text-white">CREATE</button>
      </form>
    </div>
  )
}

export default RHF
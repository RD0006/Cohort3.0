import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Form = ({ setUsers, setToggle }) => {
    let {register, handleSubmit, reset, formState : {errors},} = useForm({mode: "onChange",}); 

    return (

    <div className="flex flex-col items-center gap-3">
      
      <h1 className="text-xl font-bold">Create User</h1>
      
      <form onSubmit={handleSubmit(
        (data) => {
            /* preventDefault handled */
            setUsers((prev) => [...prev, data]);
            reset();
            /* state-lifting up using users */
            setToggle((prev) => (!prev));
        })} 
        className="w-90 flex flex-col gap-3 p-4 rounded border-2 border-black"
    >
      
        <input 
            {...register("name", {
                /* validations */ 
                required: "Name is required!",
                pattern: {
                    value: /.*\S.*/,
                    message: "Blank spaces not allowed!"
                }
            })}
            className="p-2 rounded outline-0 border border-black" 
            type="text" 
            placeholder="Name" 
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input 
            {...register("email", {
                required: "Email is required!",
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter valid email!"
                } 
            })}
            className="p-2 rounded outline-0 border border-black"  
            type="email" 
            placeholder="Email" 
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input 
            {...register("mobile", {
                required: "Mobile is required!",
                minLength: {
                    value: 10,
                    message: "Minimum 10 digits are required!",
                },
                maxLength: {
                    value: 10, 
                    message: "Maximum 10 digits are required!",
                }
            })}
            className="p-2 rounded outline-0 border border-black"  
            type="text" 
            placeholder="Mobile" 
        />
        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}

        <input 
            {...register("image", 
                {
                    required : "Image is Required!"
            })}
            className="p-2 rounded outline-0 border border-black"  
            type="text" 
            placeholder="Image" 
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">Add User</button>

      </form>
    </div>
  )
}

export default Form

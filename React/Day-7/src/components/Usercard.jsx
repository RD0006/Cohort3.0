import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className="p-4 border border-black rounded flex flex-col gap-2 bg-black text-white">
      <div className="h-40 w-40">
        <img src={user.image} alt="" className="object-cover h-full w-full rounded-xl" />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button className="bg-yellow-700 text-white py-1 px-3 rounded cursor-pointer">Update</button>
        <button className="bg-red-700 text-white py-1 px-3 rounded cursor-pointer">Delete</button>
      </div>
    </div>
  )
}

export default Usercard

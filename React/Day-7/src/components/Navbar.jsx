import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex items-center bg-black justify-between text-white rounded">
      <div>
        <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png" alt="" width={35} className="rounded-full"/>
      </div>
      <div className="flex gap-6 font-semibold">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <button className="p-2 bg-blue-700 text-white cursor-pointer rounded" onClick={() => setToggle((prev) => !prev)}>Create User</button>
    </div>
  )
}

export default Navbar
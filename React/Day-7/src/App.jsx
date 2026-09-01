import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

let App = () => {
  const [toggle, setToggle] = useState(false);
  const[users, setUsers] = useState([]);
  

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ?
      (<div className="flex gap-6">
        {
          users.map((elem) => {
            return <Usercard user={elem} />

          })
        }
      </div>)
      :
      (<div className="h-[90%] flex justify-center items-center">
        <Form setUsers={setUsers} setToggle={setToggle}/>
      </div>)}
    </div>
  );
}

export default App

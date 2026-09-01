import React, {useEffect} from 'react'

const About = () => {
    console.log("About rendering...")

    // memory leak - the component which has exited render tree with functionalities - setInterval still using memory (RAM) - memory leak
    
    let interval =  setInterval(() => {
        console.log("Hey, I am in About")
     }, 1000)


    useEffect(() => {

        
        return () => {
            clearInterval(interval);
            console.log("Hey, About is leaving")
        };
        // at the time of unmounting
    }, [])
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About

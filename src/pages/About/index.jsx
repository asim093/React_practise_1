import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
// import { MyContext } from '../context'; 

const About = () => {
  // const {name} = useContext(MyContext);

  return (
    <>
    <Navbar /> 
    <div className='layout_page'>
      <h1>About</h1>
      {/* <button onClick={incrementCounter}>Increment Counter</button> */}
    </div>
    </>
  );  
};

export default About;

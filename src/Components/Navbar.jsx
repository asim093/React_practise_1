import {  NavLink } from 'react-router-dom'
import '../App.css'
import React, {useContext} from 'react';
import { MyContext } from '../pages/context'; 
// import { useContext } from 'react'



const Navbar = () => {
 const {dark , setDark} = useContext(MyContext)

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/"  className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '}  >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '} >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact"  className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '} >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Products" className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '} >Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/practise" className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '} >Practise</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Reducer" className={({isActive}) => isActive ? 'nav-link nav-active' : 'nav-link '} >ReducerPage</NavLink>
        </li>
        
      </ul>
    </div>
    <button className=' btn btn-dark text-white' onClick={() => setDark(!dark)} >Dark Mode</button>
  </div>
</nav>
    </>
  )
}

export default Navbar
'use client'
import Image from 'next/image';
import Link from 'next/link';
import "../styles/globals.css";
import {login, signup} from '../login/actions'  
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';




export default function Navbar() {
  const user = useContext(UserContext);

  let reg;
  console.log(user)
  if(user){
      reg = Profile()
    }else{
      reg = Register()
    } 
    console.log(reg)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src="/images/code-logo.png" alt="logo" width={50} height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/Aboutus">O Nás</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Tutorials">Tutoriály</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Contacts">Kontakty</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
          </ul>
          {reg}
        </div>
      </div>
    </nav>
  );
}

function Profile(){
  const user = useContext(UserContext);
  return(<div className="profile">
  {/* ...other navbar content... */}
  {user && <div className="navbar-text">Logged in as: {user.email}</div>}   
</div>  
)}

function Register(){
  return(<div className='signup'>
  <ul className="navbar-nav ml-auto"> 
    <li className="nav-item">
      <Link className="nav-link" href="/login">Registrace</Link>               
      
    </li>
  </ul>
</div>
)}


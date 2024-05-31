// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import "../styles/globals.css";






export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
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
          </ul>
          <div className='signup'>
            <ul className="navbar-nav ml-auto"> 
              <li className="nav-item">
                <Link className="nav-link" href="/login">Registrace</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}



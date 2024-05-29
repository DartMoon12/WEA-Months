import Image from 'next/image';
import "../styles/globals.css";


  
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        <Image src="/images/code-logo.png" alt="logo" width={50} height={50} />
      </a>
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
            <a className="nav-link" href="#">O Nás</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tutoriály</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Kontakty</a>
          </li>
        </ul>
        <div className='signup'>
          <ul className="navbar-nav ml-auto"> 
            <li className="nav-item">
              <a className="nav-link" href="./Registration">Registrace</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  );
}

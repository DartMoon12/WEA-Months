import Image from 'next/image';
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <Image src="/images/code-logo.png" alt="logo" width={50} height={50} />
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
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
        </div>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className='bg'>
                <a className="nav-link" href="#">Registrace</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

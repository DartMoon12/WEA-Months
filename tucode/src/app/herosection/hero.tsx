import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <>
     <div id="heroImg" className="text-center bg-image">
      <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 id="heroHeader"className="mb-10">TuCode</h1>
            <h4 id="subHeader"className="mb-10">Naučte se tvořit moderní webové stránky
             a aplikace s našimi odbornými návody.</h4>
            <a
              data-mdb-ripple-init
              className="btn btn-outline-light btn-lg"
              href="#!"
              role="button"
            >
              Registrace
            </a>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Hero
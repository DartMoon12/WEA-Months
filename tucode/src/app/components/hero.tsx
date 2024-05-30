import React from "react";
import "../styles/globals.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div id="heroImg" className="text-center bg-image">
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 id="heroHeader" className="mb-10">
                  TuCode
                </h1>
                <h4 id="subHeader" className="mb-10">
                  Naučte se tvořit moderní webové stránky a aplikace s našimi
                  odbornými návody.
                </h4>
                <button className="main-button">
                  <span>Tutoriály </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

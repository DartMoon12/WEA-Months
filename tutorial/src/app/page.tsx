import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';




export default function Page() {
  return (    

    
    
    <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            />

    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            Logo
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="https://placehold.it/1200x400?text=IMAGE" alt="Image" />
          <div className="carousel-caption">  
            <h3>Sell $</h3>
            <p>Money Money.</p>
          </div>
        </div>
        <div className="item">
          <img
            src="https://placehold.it/1200x400?text=Another Image Maybe"
            alt="Image"
          />
          <div className="carousel-caption">
            <h3>More Sell $</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
      {/* Left and right controls */}
      <a
        className="left carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    <div className="container text-center">
      <h3>What We Do</h3>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <img
            src="https://placehold.it/150x80?text=IMAGE"
            className="img-responsive"
            style={{ width: "100%" }}
            alt="Image"
          />
          <p>Current Project</p>
        </div>
        <div className="col-sm-4">
          <img
            src="https://placehold.it/150x80?text=IMAGE"
            className="img-responsive"
            style={{ width: "100%" }}
            alt="Image"
          />
          <p>Project 2</p>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Some text..</p>
          </div>
          <div className="well">
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <footer className="container-fluid text-center">
      <p>Footer Text</p>
    </footer>
  </>
  

    

    
  );
}
import React from "react";
interface TutorialProps {
  name: string;
  img: string;
  alt: string;
}

const Tutorials = (props: TutorialProps) => {
  return (
    <>
    <div className="tilt">
      <a href="">
        <div className="tutorial-card">
          <img src={props.img} alt={props.alt} />
          <h3>{props.name}</h3>
        </div>
      </a>
      </div>
    </>
  );
};

export default Tutorials;

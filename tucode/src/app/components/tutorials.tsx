import React from "react";
interface TutorialProps {
  name: string;
  img: string;
}

const Tutorials = (props: TutorialProps) => {
  return (
    <>
      <a href="">
        <div className="tutorial-card">
          <img src={props.img} alt="" />
          <h3>{props.name}</h3>
        </div>
      </a>
    </>
  );
};

export default Tutorials;

import React from "react";
interface TutorialContentProps {
  name: string;
  content: string;
  video: string;
}

const TutorialContent = (props: TutorialContentProps) => {
  return (
    <>
      <h2>{props.name}</h2>;<p>{props.content}</p>;
      <div dangerouslySetInnerHTML={{ __html: props.video }} />;
    </>
  );
};

export default TutorialContent;

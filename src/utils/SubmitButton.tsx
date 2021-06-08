import React from "react";

interface SubmitButtonProps {
  type: any;
  value: any;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <>
      <div>
        <button type={props.type}>{props.value}</button>
      </div>
    </>
  );
};

export default SubmitButton;

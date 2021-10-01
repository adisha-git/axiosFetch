import React from "react";
import "./Button.css";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className='btnComponent' onClick={props.onClick}>
      {props.btnText}
    </div>
  );
};

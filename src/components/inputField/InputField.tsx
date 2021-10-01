import React from "react";
import "./InputField.css";

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  testId?: string;
}

export const InputField = (props: InputFieldProps) => {
  return (
    <div className="inputWrapper">
      <input
        data-testid={props.testId}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <p>{props.error}</p>
    </div>
  );
};

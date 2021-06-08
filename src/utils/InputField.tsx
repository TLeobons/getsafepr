import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <>
      <div>
        <label>
          {props.label}
          <span>
            <input
              type={props.type}
              required
              onChange={props.onChange}
              value={props.value}
            ></input>
          </span>
        </label>
      </div>
    </>
  );
};

export default InputField;

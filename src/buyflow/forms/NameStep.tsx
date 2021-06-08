import React, { useState } from "react";
import InputField from "../../utils/InputField";
import SubmitButton from "../../utils/SubmitButton";

interface NameStepProps {
  cb: (field: string, value: object) => void;
}

const NameStep = (props: NameStepProps) => {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });
  const { firstName, lastName } = name;
  return (
    <>
      <div>
        <form onSubmit={() => props.cb("name", name)}>
          <InputField
            label={"First Name"}
            type={"text"}
            value={firstName}
            onChange={(e: any) => {
              setName({ ...name, firstName: e.target.value });
            }}
          ></InputField>

          <InputField
            label={"Last Name"}
            type={"text"}
            value={lastName}
            onChange={(e: any) => {
              setName({ ...name, lastName: e.target.value });
            }}
          ></InputField>

          <SubmitButton type={"submit"} value={"Next"}></SubmitButton>
        </form>
      </div>
    </>
  );
};

export default NameStep;

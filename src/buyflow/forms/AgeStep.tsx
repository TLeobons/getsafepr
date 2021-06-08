import React, { useState } from "react";
import InputField from "../../utils/InputField";
import SubmitButton from "../../utils/SubmitButton";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep = (props: AgeStepProps) => {
  const [age, setAge] = useState(0);
  return (
    <>
      <div>
        <form onSubmit={() => props.cb("age", age)}>
          <InputField
            label={"Age"}
            type={"number"}
            value={age}
            onChange={(e: any) => {
              setAge(Number(e.target.value));
            }}
          ></InputField>
          <SubmitButton type={"submit"} value={"Next"}></SubmitButton>
        </form>
      </div>
    </>
  );
};

export default AgeStep;

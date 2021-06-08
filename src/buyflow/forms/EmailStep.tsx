import React, { useState } from "react";
import InputField from "../../utils/InputField";
import SubmitButton from "../../utils/SubmitButton";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep = (props: EmailStepProps) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div>
        <form onSubmit={() => props.cb("email", email)}>
          <InputField
            label={"Email"}
            type={"email"}
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          ></InputField>

          <SubmitButton type={"submit"} value={"Next"}></SubmitButton>
        </form>
      </div>
    </>
  );
};

export default EmailStep;

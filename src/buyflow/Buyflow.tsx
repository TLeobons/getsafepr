import React, { useState } from "react";
import NameStep from "./forms/NameStep";
import AgeStep from "./forms/AgeStep";
import EmailStep from "./forms/EmailStep";
import SummaryStep from "./forms/SummaryStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance"
};

const Buyflow = (props: BuyflowProps) => {
  let [currentStep, setStep] = useState(1);
  const [collectedData, updateData] = useState({
    name: {},
    email: "",
    age: 0
  });

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep((currentStep += 1));
  };
  switch (currentStep) {
    case 1:
      return (
        <>
          <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
          <NameStep cb={getStepCallback("email")} />
        </>
      );
    case 2:
      return (
        <>
          <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
          <EmailStep cb={getStepCallback("age")} />
        </>
      );

    case 3:
      return (
        <>
          <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
          <AgeStep cb={getStepCallback("summary")} />
        </>
      );

    case 4:
      return (
        <>
          <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
          <SummaryStep collectedData={collectedData} />
        </>
      );

    default:
      break;
  }
};

export default Buyflow;

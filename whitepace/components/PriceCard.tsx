import React from "react";
import Button from "./Button";

interface priceCardProp {
  keyVal: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  btnTxt: string;
}
const PriceCard = ({
  keyVal,
  title,
  price,
  description,
  features,
  btnTxt,
}: priceCardProp) => {
  return (
    <div
      key={keyVal}
      className={`card1 border rounded py-10 ${keyVal == 2 ? "bg-primary_1 border-secondary_3 text-secondary_3" : "border-secondary_1"} px-11 flex flex-col justify-center gap-1.5`}
    >
      <div className="text-p1-bold">{title}</div>
      <div className="text-h4">{`${price}`}</div>
      <div className="text-p2-regular">{description}</div>
      <div className="flex flex-col justify-between gap-3.5">
        {features.map((str) => {
          return (
            <div key={str} className="flex flex-row gap-3 items-center">
              <img
                src="./icon1.png"
                alt="logo"
                className="max-w-5.75 max-h-4.5"
              />
              <div className="text-p2-regular leading-tight">{str}</div>
            </div>
          );
        })}
      </div>
      <div>
        <Button
          btnClassName={`text-p2-regular flex flex-row items-center gap-1.5 rounded ${keyVal == 2 ? "text-secondary_3 border-1 border-secondary_1" : "border-1 border-secondary_1 text-secondary_4"} py-2 px-8 mt-1`}
        >
          {btnTxt}
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;

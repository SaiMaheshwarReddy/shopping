import React, { useState } from "react";
import { Button } from "./button";
import { MinusPrimary, PlusPrimary, Trash } from "@/assets/images";

const QuantityButton = ({ quantity: quantityFromProps, className }: any) => {
  const [quantityView, setQuantityView] = useState(false);
  const [quantity, setQuantity] = useState(quantityFromProps || 0);
  const handleQuantityView = () => {
    setQuantityView(!quantityView);
  };
  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleQuantityDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const qButton = (
    <button
      onClick={handleQuantityView}
      className={`border border-primaryYellow rounded-3xl text-primaryYellow w-16 h-8 ${className}`}
    >
      {`${quantity} pcs`}
    </button>
  );

  return !quantityView ? (
    qButton
  ) : (
    <div className="bg-white rounded-xl pr-2  flex justify-between items-stretch gap-3">
      <button className="flex justify-center items-center bg-primaryYellow rounded-lg w-8">
        <img src={Trash} className="w-[18px]" />
      </button>
      <div className="flex my-1 gap-2">
        <button
          onClick={handleQuantityDecrement}
          className="flex justify-center items-center"
        >
          <img src={MinusPrimary} className="w-[18px]" />
        </button>
        {qButton}{" "}
        <button
          onClick={handleQuantityIncrement}
          className="flex justify-center items-center"
        >
          <img src={PlusPrimary} className="w-[18px]" />
        </button>
      </div>
    </div>
    // <div className="flex h-16 items-stretch border">
    //   <div className="flex-1 bg-gray-200">Other content</div>
    //   <button className="bg-blue-500 text-white px-4">Click Me</button>
    // </div>
  );
};

export default QuantityButton;

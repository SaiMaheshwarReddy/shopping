import QuantityButton from "@/components/ui/QuantityButton";
import React from "react";

const ItemsByCategoryInCart = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-gray-300">Fruits and vegitables</p>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Avocado</p>
          <QuantityButton
            quantity={2}
            className="text-xs font-bold"
          ></QuantityButton>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Avocado</p>
          <QuantityButton className="text-xs font-bold">2 pcs</QuantityButton>
        </div>
      </div>
    </div>
  );
};

export default ItemsByCategoryInCart;

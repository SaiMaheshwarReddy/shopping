import React from "react";
import { Bottle } from "@/assets/images";
const CartView = () => {
  return (
    <div className="flex h-full flex-col justify-start items-stretch bg-lightOrange py-10 px-8">
      <div className="bg-maroon rounded-2xl flex justify-between items-start p-4 pl-2 gap-4">
        <img src={Bottle} alt="colored bottle" width="55px" className="-mt-8" />
        <div>
          <p className="text-white font-semibold leading-5">
            Didn't find what you need ?
          </p>
          <button className="mt-2">Add Item</button>
        </div>
      </div>
      <div>
        <div>
          <h3>Shopping List</h3>
          <img alt="Edit shopping list title" />
        </div>
        <div>
          <div>
            <p>Fruits and vegitables</p>
            <div>
              <p>Avocado</p>
              <button>2pcs</button>
            </div>
            <div>
              <p>Avocado</p>
              <button>2pcs</button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CartView;

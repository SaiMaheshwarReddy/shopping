import { Bottle, Pencil, ShoppingCart } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuantityButton from "@/components/ui/QuantityButton";
import ItemsByCategoryInCart from "./ItemsByCategoryInCart";
// import { Pencil } from "lucide-react";

const CartView = () => {
  const inProgress = false;
  return (
    <div className="flex h-full flex-col justify-start items-stretch bg-lightOrange  overflow-y-scroll">
      <div
        className={` flex h-full flex-col justify-${
          inProgress ? "start" : "start"
        } items-stretch bg-lightOrange pt-10 px-10 gap-10  overflow-y-scroll `}
      >
        <div className="bg-maroon rounded-2xl flex justify-between items-start p-5 pl-2 gap-4">
          <img
            src={Bottle}
            alt="colored bottle"
            width="76px"
            className="-mt-9"
          />
          <div>
            <p className="text-white leading-5 font-semibold tracking-wider">
              Didn't find what you need ?
            </p>
            <Button
              variant="secondary"
              className="mt-3 px-7 py-5 rounded-xl font-bold"
            >
              Add Item
            </Button>
          </div>
        </div>
        {inProgress ? (
          <div className="flex flex-col justify-start gap-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Shopping List</h3>
              <img src={Pencil} width={24} alt="Edit " />
              {/* <Pencil fill="black" width={18} /> */}
            </div>
            <ItemsByCategoryInCart />
            <ItemsByCategoryInCart />
            <ItemsByCategoryInCart />
            <ItemsByCategoryInCart />
            <ItemsByCategoryInCart />
          </div>
        ) : (
          <div className="mx-auto font-semibold text-xl flex flex-col items-center justify-end gap-7 grow">
            <p className="mb-8">No Items</p>
            <img src={ShoppingCart} width="245px" className="z-20" />
          </div>
        )}
      </div>
      <div className="w-full bg-white sticky z-10 right-0 bottom-0 px-8 py-4">
        <div className="relative h-11">
          <Input className="w-full h-full" />
          <Button
            className="h-full absolute right-0 top-0 font-semibold "
            // disabled
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartView;

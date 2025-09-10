import { Bottle } from "@/assets/images";
import { Button } from "@/components/ui/button";

const CartView = () => {
  return (
    <div className="flex h-full flex-col justify-start items-stretch bg-lightOrange py-10 px-10">
      <div className="bg-maroon rounded-2xl flex justify-between items-start p-5 pl-2 gap-4">
        <img src={Bottle} alt="colored bottle" width="76px" className="-mt-9" />
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

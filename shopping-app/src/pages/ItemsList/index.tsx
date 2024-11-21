import { Search } from "@/assets/images";
import { Input } from "@/components/ui/input";

const ItemsList = () => {
  return (
    <div>
      <div className="flex justify-between items-start gap-16">
        <h1 className="text-3xl font-semibold">
          <span className="text-primaryYellow">Shopping</span> allows you to
          take your shopping list wherever you go
        </h1>
        <Input
          type="email"
          className="min-w-64"
          placeholder="search item"
          icon={<img src={Search} width="100%" />}
        />
      </div>
    </div>
  );
};
// box-shadow: ;

export default ItemsList;

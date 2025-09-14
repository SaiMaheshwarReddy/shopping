import { Search } from "@/assets/images";
import { Input } from "@/components/ui/input";
import ItemsByCategory from "./ItemsByCategory";
// import { ItemsByCategoryProps } from "@/lib/utils";
import { useEffect, useState } from "react";
import { itemsService } from "@/services/itemsService";

const ItemsList = () => {
  const [searchVal, setSearchVal] = useState("");
  const [itemsListData, setItemsData] = useState([]);

  const getItems = async () => {
    const items = await itemsService.getItems();
    console.log(items, "items");
    setItemsData(items.data);
  };
  useEffect(() => {
    getItems();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };
  return (
    <div className="flex flex-col justify-start items-start gap-14 h-full">
      <div className="flex justify-between items-start gap-16 col-g">
        <h1 className="text-3xl font-semibold">
          <span className="text-primaryYellow">Shopping</span> allows you to
          take your shopping list wherever you go
        </h1>
        <Input
          type="email"
          className="min-w-64"
          placeholder="search item"
          value={searchVal}
          onChange={handleSearch}
          icon={<img src={Search} width="100%" />}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-12 pb-16 overflow-y-auto">
        {itemsListData.map((category) => {
          return (
            <ItemsByCategory
              categoryId={category.categoryId}
              categoryName={category.categoryName}
              items={category.items}
              key={category.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};
// box-shadow: ;

export default ItemsList;

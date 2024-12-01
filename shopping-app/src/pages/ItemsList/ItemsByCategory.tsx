import { Plus } from "@/assets/images";
import { ItemsByCategoryProps } from "@/lib/utils";
import React from "react";

const ItemsByCategory: React.FC<ItemsByCategoryProps> = ({
  categoryId,
  categoryName,
  items,
}) => {
  return (
    <div>
      <div className="text-lg font-medium">{categoryName}</div>
      <div className="mt-5 flex justify-start items-start gap-x-7 gap-y-8 flex-wrap">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              style={{ boxShadow: "0px 2px 12px 0px #0000000D" }}
              className="bg-white min-w-44 py-3 px-5 rounded-xl flex justify-between items-center font-semibold bg-"
            >
              <p>{item.name}</p>
              <div>
                <img src={Plus} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsByCategory;

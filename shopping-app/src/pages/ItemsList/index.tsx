import { Plus, Search } from "@/assets/images";
import { Input } from "@/components/ui/input";
import ItemsByCategory from "./ItemsByCategory";
import { ItemsByCategoryProps } from "@/lib/utils";

const ItemsList = () => {
  const itemsByCatData: ItemsByCategoryProps[] = [
    {
      categoryId: 1,
      categoryName: "Vegetables",
      items: [
        {
          id: 1,
          name: "Potato",
          description: "",
          image_url: "",
          categoryId: 1,
        },
        {
          id: 2,
          name: "Tomato",
          description: "",
          image_url: "",
          categoryId: 1,
        },
        {
          id: 2,
          name: "Tomato",
          description: "",
          image_url: "",
          categoryId: 1,
        },
        {
          id: 2,
          name: "Tomato",
          description: "",
          image_url: "",
          categoryId: 1,
        },
        {
          id: 2,
          name: "Tomato",
          description: "",
          image_url: "",
          categoryId: 1,
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Fruits",
      items: [
        {
          id: 3,
          name: "Apple",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Fruits",
      items: [
        {
          id: 3,
          name: "Apple",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "Fruits",
      items: [
        {
          id: 3,
          name: "Apple",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
        {
          id: 5,
          name: "Orange",
          description: "",
          image_url: "",
          categoryId: 2,
        },
      ],
    },
  ];
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
          icon={<img src={Search} width="100%" />}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-12 pb-16 overflow-y-auto">
        {itemsByCatData.map((cat) => {
          return (
            <ItemsByCategory
              categoryId={cat.categoryId}
              categoryName={cat.categoryName}
              items={cat.items}
            />
          );
        })}
      </div>
    </div>
  );
};
// box-shadow: ;

export default ItemsList;

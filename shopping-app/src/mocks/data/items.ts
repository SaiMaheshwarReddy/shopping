const items = [
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
      { id: 3, name: "Onion", description: "", image_url: "", categoryId: 1 },
      {
        id: 4,
        name: "Carrot",
        description: "",
        image_url: "",
        categoryId: 1,
      },
      {
        id: 5,
        name: "Spinach",
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
      { id: 6, name: "Apple", description: "", image_url: "", categoryId: 2 },
      {
        id: 7,
        name: "Banana",
        description: "",
        image_url: "",
        categoryId: 2,
      },
      { id: 8, name: "Mango", description: "", image_url: "", categoryId: 2 },
      {
        id: 9,
        name: "Orange",
        description: "",
        image_url: "",
        categoryId: 2,
      },
      {
        id: 10,
        name: "Grapes",
        description: "",
        image_url: "",
        categoryId: 2,
      },
    ],
  },
  {
    categoryId: 3,
    categoryName: "Dairy",
    items: [
      { id: 11, name: "Milk", description: "", image_url: "", categoryId: 3 },
      {
        id: 12,
        name: "Cheese",
        description: "",
        image_url: "",
        categoryId: 3,
      },
      {
        id: 13,
        name: "Butter",
        description: "",
        image_url: "",
        categoryId: 3,
      },
      {
        id: 14,
        name: "Yogurt",
        description: "",
        image_url: "",
        categoryId: 3,
      },
    ],
  },
  {
    categoryId: 4,
    categoryName: "Bakery",
    items: [
      {
        id: 15,
        name: "Bread",
        description: "",
        image_url: "",
        categoryId: 4,
      },
      {
        id: 16,
        name: "Croissant",
        description: "",
        image_url: "",
        categoryId: 4,
      },
      {
        id: 17,
        name: "Bagel",
        description: "",
        image_url: "",
        categoryId: 4,
      },
    ],
  },
  {
    categoryId: 5,
    categoryName: "Beverages",
    items: [
      {
        id: 18,
        name: "Coffee",
        description: "",
        image_url: "",
        categoryId: 5,
      },
      { id: 19, name: "Tea", description: "", image_url: "", categoryId: 5 },
      {
        id: 20,
        name: "Orange Juice",
        description: "",
        image_url: "",
        categoryId: 5,
      },
      { id: 21, name: "Soda", description: "", image_url: "", categoryId: 5 },
    ],
  },
];

export const getItems = () => [...items];

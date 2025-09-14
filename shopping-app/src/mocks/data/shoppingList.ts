let shoppingListRes = {
  id: "list_001",
  name: "Groceries – Sep 15",
  createdAt: "2025-09-13T10:30:00Z",
  updatedAt: "2025-09-13T10:30:00Z",
};

let shoppingLists = [
  {
    id: "list_001",
    name: "Groceries – Sep 15",
    createdAt: "2025-09-13T10:30:00Z",
  },
  {
    id: "list_002",
    name: "Diwali Party Supplies",
    createdAt: "2025-09-05T08:20:00Z",
  },
  {
    id: "list_003",
    name: "Monthly Household",
    createdAt: "2025-08-28T12:45:00Z",
  },
];

const createShoppingList = (data) => {
  let newShoppingList = {
    id: shoppingLists.length + 1,
    name: data.name,
    createdAt: new Date(),
  };

  return newShoppingList;
};

const getAllShoppingLists = () => {
  return [...shoppingLists];
};
const getShoppingList = (id) => {
  let data = {
    id: "list_001",
    name: "Groceries – Sep 15",
    createdAt: "2025-09-13T10:30:00Z",
    items: [
      {
        id: "itm_101",
        name: "Milk",
        category: "Dairy",
        quantity: 2,
        completed: false,
      },
      {
        id: "itm_102",
        name: "Bread",
        category: "Bakery",
        quantity: 1,
        completed: true,
      },
      {
        id: "itm_103",
        name: "Eggs",
        category: "Dairy",
        quantity: 12,
        completed: false,
      },
    ],
  };
};

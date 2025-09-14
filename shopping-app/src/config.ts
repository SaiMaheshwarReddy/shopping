// ⚙️ src/config/api.js
const config = {
  // Toggle between mock and real API
  USE_MSW: import.meta.env.VITE_USE_MSW === "true",

  // API base URLs
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5174/api",
  MOCK_BASE_URL: "/api", // MSW will intercept these routes

  // Get the appropriate base URL
  get baseURL() {
    return this.USE_MSW ? this.MOCK_BASE_URL : this.API_BASE_URL;
  },

  // API endpoints
  endpoints: {
    // 🛒 Shopping Lists
    shoppingLists: {
      root: "/shopping-lists",
      byId: (listId: number) => `/shopping-lists/${listId}`,
      complete: (listId: number) => `/shopping-lists/${listId}/complete`,
      items: (listId: number) => `/shopping-lists/${listId}/items`,
      itemById: (listId: number, itemId: number) =>
        `/shopping-lists/${listId}/items/${itemId}`,
      completeItem: (listId: number, itemId: number) =>
        `/shopping-lists/${listId}/items/${itemId}/complete`,
    },

    // 📚 Item Catalog
    items: {
      root: "/items",
      byId: (itemId: number) => `/items/${itemId}`,
    },

    // 📊 Analytics
    analytics: {
      summary: "/analytics/summary",
      categories: "/analytics/categories",
      time: (range = "monthly") => `/analytics/time?range=${range}`,
    },
  },
};

export default config;

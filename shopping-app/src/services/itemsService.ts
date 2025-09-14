import config from "@/config";
import api from "./api";

export const itemsService = {
  async getItems(params = {}) {
    return api.get(config.endpoints.items.root, params);
  },
};

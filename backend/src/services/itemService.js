import { prisma } from "../config/prisma.js";
import { CreateItemSchema } from "../validations/itemSchema.js";

export const itemService = {
  async getAllItems() {
    return await prisma.item.findMany({});
  },

  async createItem(data) {
    CreateItemSchema.parse(data);
    return await prisma.item.create({
      data,
    });
  },

  async updataItem(id, data) {
    CreateItemSchema.parse(data);
    return await prisma.item.update({
      where: {
        id,
      },
      data,
    });
  },

  async deleteItem(id) {
    return await prisma.item.delete({
      where: {
        id,
      },
    });
  },
};

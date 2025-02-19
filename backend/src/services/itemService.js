import { prisma } from "../config/prisma.js";
import { CreateItemSchema } from "../validations/itemSchema.js";

export const itemService = {
  async getAllItems({ page = 1, limit = 9 }) {
    const skip = (page - 1) * limit;

    const items = await prisma.item.findMany({
      skip,
      take: limit,
    });

    const totalItems = await prisma.item.count();
    return {
      items,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    };
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

  async searchItems({ keyword, type, rarity }) {
    const where = {
      OR: [{ name: { contains: keyword } }, { effect: { contains: keyword } }],
      AND: [],
    };

    if (type && type.trim()) {
      where.AND.push({ type: { contains: type } });
    }
    if (rarity && rarity.trim()) {
      where.AND.push({ rarity: { contains: rarity } });
    }

    return await prisma.item.findMany({ where });
  },
};

import { z } from "zod";

export const CreateItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  effect: z.string(),
  price: z.number(),
  weight: z.number(),
  rarity: z.string(),
  detail_url: z.string(),
});

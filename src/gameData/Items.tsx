import { ItemClass } from "./objects/Item";
import { PotionShopInventory } from "./potionShop";

export const NewPotionShopInventory: ItemClass[] = PotionShopInventory.map(
  (item: ItemClass) => new ItemClass(item)
);

export 


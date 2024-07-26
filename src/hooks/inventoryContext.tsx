import { useState, createContext } from "react";
import { MonsterLoot } from "../gameData/Enemies/loot";
import { ArmorType } from "../gameData/armorShop";
import { PotionType } from "../gameData/potionShop";
import { Item } from "../gameData/quests/questItems";

type ItemType = MonsterLoot | ArmorType | PotionType | Item;

type inventoryContextType = {
  inventory: Map<ItemType, number>;

  removeItem: (item: ItemType, quantity?: number) => void;
  addItem: (item: ItemType, quantity?: number) => void;
};

export const InventoryContext = createContext<inventoryContextType>(
  {} as inventoryContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const InventoryProvider = ({ children }: ContextProviderProps) => {
  const [inventory, setInventory] = useState<Map<ItemType, number>>(new Map());

  const removeItem = (item: ItemType, quantity: number = 1) => {
    console.log("removing item", item);

    setInventory((prevInventory) => {
      // Create a new Map from the previous state
      const newInventory = new Map(prevInventory);

      const itemCount = newInventory.get(item);
      // console.log(
      //   `Removing item: ${item.name} Before removal there was ${itemCount} items. It should remove ${quantity} items.`
      // );

      if (itemCount) {
        newInventory.set(item, itemCount - quantity);
      }
      if (itemCount || itemCount === 0) {
        newInventory.delete(item);
      }

      // console.log(
      //   `There is now ${newInventory.get(item)} of ${
      //     item.name
      //   } left after removing.`
      // );

      return newInventory;
    });
  };

  const addItem = (item: ItemType, quantity: number = 1) => {
    console.log("adding item", item);

    if (inventory.has(item)) {
      inventory.set(item, inventory.get(item)! + quantity);
    } else {
      inventory.set(item, 1);
    }
  };
  return (
    <InventoryContext.Provider
      value={{
        inventory,
        addItem,
        removeItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

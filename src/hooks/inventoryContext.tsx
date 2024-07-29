import { useState, createContext } from "react";
import { Item } from "../gameData/objects/Item";

type inventoryContextType = {
  inventory: Map<Item, number>;

  removeItem: (item: Item, quantity?: number) => void;
  addItem: (item: Item, quantity?: number) => void;
};

export const InventoryContext = createContext<inventoryContextType>(
  {} as inventoryContextType
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const InventoryProvider = ({ children }: ContextProviderProps) => {
  const [inventory, setInventory] = useState<Map<Item, number>>(new Map());

  const removeItem = (item: Item, quantity: number = 1) => {
    setInventory((prevInventory) => {
      const newInventory = new Map(prevInventory);
      const itemCount = newInventory.get(item);

      if (itemCount) {
        newInventory.set(item, itemCount - quantity);
      }
      if (newInventory.get(item) === 0) {
        newInventory.delete(item);
      }

      return newInventory;
    });
  };

  const addItem = (item: Item, quantity: number = 1) => {
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

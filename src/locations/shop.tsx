import { GameContext } from "../hooks/gameContext";
import { useContext } from "react";
import { LocationList } from "../gameData/locations";
// import { ArmorShopInventory, ArmorType } from "../gameData/armorShop";
// import { PotionShopInventory, PotionType } from "../gameData/potionShop";
import { Locations } from "../gameData/Enums";
import { InventoryContext } from "../hooks/inventoryContext";
import { CharacterContext } from "../hooks/characterContext";
import { ArmorShopInventory } from "../gameData/armorShop";
import { PotionShopInventory } from "../gameData/potionShop";
import { Item } from "../gameData/objects/Item";

export const Shop = () => {
  const { location, PrevLocation, setLocation, setBgImg, item } =
    useContext(GameContext);

  const currentLocation = LocationList[location];

  return (
    <div className="flex flex-col items-center mt-[-70px]">
      {item && (
        <div className="absolute bg-beige border-2 border-blue place-self-center mt-[-400px] px-5 py-3 rounded-md max-w-[600px] z-10">
          <h3 className="font-Courier text-2xl">{`${item.name}`}</h3>
          <h3 className="font-Courier text-2xl">Price: {`${item.cost}`}</h3>
          <h3 className="font-Courier text-2xl">HP Bonus: {`${item.hp}`}</h3>
          <h3 className="font-Courier text-2xl">
            Attack Bonus: {`${item.attack}`}
          </h3>
          {item.type === "Potion" && (
            <h3 className="font-Courier text-2xl">
              Healing: {"currentHP" in item ? `${item.heal}` : ""}
            </h3>
          )}
          <p className="font-Courier text-2xl border-2 border-black p-2">{`${item.description}`}</p>
        </div>
      )}

      <div className="place-self-start ml-4 mt-28 flex gap-2">
        <img
          className="h-auto"
          src="./assets/bg-images/locationDot.png"
          alt="location dot"
        />
        <button
          className="font-Courier text-2xl"
          onClick={() => {
            setLocation(PrevLocation);
            setBgImg(LocationList[PrevLocation].media);
          }}
        >
          Go Back
        </button>
      </div>
      <div className="flex ml-4 flex-col justify-center items-center w-full max-h-[500px]">
        <p className="font-Courier text-3xl text-center">
          {currentLocation.text}
        </p>
        <div className="flex gap-4 mb-8 mt-4 flex-wrap px-9 py-4 overflow-y-auto border-2 border-black max-w-[850px] ">
          {location === Locations.ArmorShop ? (
            <MakeInventoryItems list={ArmorShopInventory} />
          ) : (
            <MakeInventoryItems list={PotionShopInventory} />
          )}
        </div>
      </div>
    </div>
  );
};

type MakeInventoryItemsProps = {
  list: Item[];
};

const MakeInventoryItems = ({ list }: MakeInventoryItemsProps) => {
  const { setGold, gold } = useContext(CharacterContext);

  const { addItem } = useContext(InventoryContext);

  const { setItem } = useContext(GameContext);

  const handlePurchase = (item: Item) => {
    if (!item.cost) {
      console.error("Item has no cost attribute: ", item);
      return;
    }
    if (item.cost > gold) {
      alert("You do not have enough gold to purchase this item!");
      return;
    }
    if (confirm("are you sure you wanna buy this?") == true) {
      setGold(gold - item.cost);
      addItem(item);
    }
  };

  return (
    <>
      {list.map((e, i) => (
        <div key={i}>
          <button
            className="h-[80px] w-[80px] border-2 border-black"
            onClick={() => handlePurchase(e)}
            onMouseEnter={() => setItem(e)}
            onMouseLeave={() => setItem(null)}
          >
            <img key={i} src={e.media.src} alt={e.media.alt} />
          </button>
        </div>
      ))}
    </>
    // <>
    //   {list.map((e, i) => (
    //     <div key={i}>
    //       <Popup
    //         trigger={
    //           <button className="h-[80px] w-[80px] border-2 border-black">
    //             <img key={i} src={e.media.src} alt={e.media.alt} />
    //           </button>
    //         }
    //       >
    //         <div className="bg-[#d9bf9e] border-2 border-black p-2">
    //           <h3 className="font-uncial text-2xl">{`${e.name}`}</h3>
    //           <h3 className="font-uncial text-2xl">Price: {`${e.cost}`}</h3>
    //           <h3 className="font-uncial text-2xl">HP Bonus: {`${e.hp}`}</h3>
    //           <h3 className="font-uncial text-2xl">
    //             Attack Bonus: {`${e.attack}`}
    //           </h3>
    //           <button
    //             className="border-2 border-black px-4 py-1 cursor-pointer font-uncial text-2xl"
    //             onClick={() => {
    //               handlePurchase(e);
    //             }}
    //           >
    //             Buy
    //           </button>
    //         </div>
    //       </Popup>
    //     </div>
    //   ))}
    // </>
  );
};

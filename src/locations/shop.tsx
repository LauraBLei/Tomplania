import { GameContext } from "../hooks/gameContext";
import { useContext } from "react";
import { LocationList } from "../gameData/locations";
import { Locations } from "../gameData/Enums";

import { ArmorShopInventory } from "../gameData/armorShop";
import { PotionShopInventory } from "../gameData/potionShop";
import { Item } from "../gameData/objects/Item";
import { BlacksmithShopInventory } from "../gameData/blackSmith";

export const Shop = () => {
  const { location, PrevLocation, setLocation, setBgImg, setItem } =
    useContext(GameContext);

  const currentLocation = LocationList[location];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="place-self-start ml-4  flex gap-2">
        <button
          className="locationButton"
          onClick={() => {
            setLocation(PrevLocation);
            setBgImg(LocationList[PrevLocation].media);
            setItem(null);
          }}
        >
          <img
            className="h-auto"
            src="./assets/bg-images/locationDot.png"
            alt="location dot"
          />
          Go Back
        </button>
      </div>
      <div className="flex  flex-col justify-center items-center w-full max-h-[500px]">
        <p className="TextDark">{currentLocation.text}</p>
        <div className="flex gap-4  mt-4 flex-wrap px-4 lg:px-9 py-4 overflow-y-auto border-2 border-black max-w-[850px] ">
          {location === Locations.ArmorShop ? (
            <MakeInventoryItems list={ArmorShopInventory} />
          ) : location === Locations.PotionShop ? (
            <MakeInventoryItems list={PotionShopInventory} />
          ) : (
            <MakeInventoryItems list={BlacksmithShopInventory} />
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
  const { setItem } = useContext(GameContext);

  return (
    <>
      {list.map((item, i) => (
        <div key={i}>
          <button
            className="h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] overflow-hidden object-cover border-2 border-black flex justify-center"
            onClick={() => {
              setItem(item);
            }}
          >
            <img
              className="max-h-[50px] lg:max-h-[80px]"
              key={i}
              src={item.media.src}
              alt={item.media.alt}
            />
          </button>
        </div>
      ))}
    </>
  );
};

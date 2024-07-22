import { GameContext } from "../hooks/gameContext";
import { useContext } from "react";
import { LocationList } from "../gameData/locations";
import { ArmorShopInventory, ArmorType } from "../gameData/armorShop";
import { PotionShopInventory, PotionType } from "../gameData/potionShop";
import { Locations } from "../gameData/locations";
// import Popup from "reactjs-popup";
import { CharacterContext } from "../hooks/characterContext";

export const Shop = () => {
  const { location, PrevLocation, setLocation, setBgImg, item } =
    useContext(GameContext);

  const currentLocation = LocationList[location];

  const bgText = {
    backgroundImage: `url("./assets/bg-images/textbg.png")`,
  };

  return (
    <div className="flex flex-col">
      {item && (
        <div className="bg-[#d9bf9e] place-self-center mt-[250px] px-5 py-3 rounded-md max-w-[600px]">
          <h3 className="font-Courier text-2xl">{`${item.name}`}</h3>
          <h3 className="font-Courier text-2xl">Price: {`${item.cost}`}</h3>
          <h3 className="font-Courier text-2xl">HP Bonus: {`${item.hp}`}</h3>
          <h3 className="font-Courier text-2xl">
            Attack Bonus: {`${item.attack}`}
          </h3>
          {item.type === "Potion" && (
            <h3 className="font-Courier text-2xl">
              Healing: {"currentHP" in item ? `${item.currentHP}` : ""}
            </h3>
          )}
          <p className="font-Courier text-2xl border-2 border-black p-2">{`${item.description}`}</p>
        </div>
      )}

      <div
        className="bg-no-repeat bg-cover w-full  h-auto px-[60px] py-10 pt-[100px] flex flex-col items-center justify-center gap-6 absolute bottom-0 mb-[-350px]"
        style={bgText}
      >
        <div className="place-self-start ml-4">
          <button
            className="button"
            onClick={() => {
              setLocation(PrevLocation);
              setBgImg(LocationList[PrevLocation].media);
            }}
          >
            Go Back
          </button>
        </div>
        <div className="flex ml-4 flex-col justify-center items-center w-full max-h-[500px]">
          <p className="font-Courier text-3xl">{currentLocation.text}</p>
          <div className="flex gap-4 mb-8 mt-4 flex-wrap px-9 py-4 overflow-y-auto border-2 border-black max-w-[850px] ">
            {location === Locations.ArmorShop ? (
              <MakeInventoryItems list={ArmorShopInventory} />
            ) : (
              <MakeInventoryItems list={PotionShopInventory} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

type MakeInventoryItemsProps = {
  list: ArmorType[] | PotionType[];
};

const MakeInventoryItems = ({ list }: MakeInventoryItemsProps) => {
  const { gold, setGold, Inventory, setInventory } =
    useContext(CharacterContext);

  const { setItem } = useContext(GameContext);

  const handlePurchase = (e: ArmorType | PotionType) => {
    if (e.cost > gold) {
      alert("You do not have enough gold to purchase this item!");
      return;
    }
    if (confirm("are you sure you wanna buy this?") == true) {
      setGold(gold - e.cost);
      setInventory([...Inventory, e]);
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

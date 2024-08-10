import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/start";
import { CharacterSelection } from "./pages/characterSelection";
import { GameProvider } from "./hooks/gameContext";
import { GamePage } from "./pages/game";
import { CharacterProvider } from "./hooks/characterContext";
import { InventoryProvider } from "./hooks/inventoryContext";
import { CreditPage } from "./pages/credits";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InventoryProvider>
      <CharacterProvider>
        <GameProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/Character" element={<CharacterSelection />} />
              <Route path="/Game" element={<GamePage />} />
              <Route path="/Credits" element={<CreditPage />} />
            </Routes>
          </BrowserRouter>
        </GameProvider>
      </CharacterProvider>
    </InventoryProvider>
  </React.StrictMode>
);

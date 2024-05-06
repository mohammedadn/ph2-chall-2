import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BotsPage from "./BotsPage";
import BotSpecs from "./BotSpecs";

function App() {
  const  [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Function to handle adding a bot to the army
  const addToArmy = (bot) => {
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to handle removing a bot from the army
  const removeFromArmy = (botId) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  useEffect(() => {
    fetch("https://jsonnna.onrender.com/bots")
    .then(response => response.json())
    .then(data => setBots(data));
  },[botArmy]);

  return (
   
      <Routes>
        <Route path="/ph2-chall-2" element={<BotsPage bots = {bots} botArmy={botArmy} addToArmy = {addToArmy} removeFromArmy={removeFromArmy}/>} />
        <Route path="/ph2-chall-2/bot/:id" element={<BotSpecs addToArmy = {addToArmy} />} />
      </Routes>
  
  );
}

export default App;
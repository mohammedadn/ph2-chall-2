import React from "react";
import { Link } from "react-router-dom"; 

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, addToArmy, removeFromArmy }) {
  const handleClick = () => {
    addToArmy(bot);
  };

  const handleRemove = () => {
    // Remove the bot from the army in the frontend
    removeFromArmy(bot.id);
  
    // Send a request to the backend to remove the bot
    fetch(`https://jsonnna.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot from backend");
        }
      })
      .catch((error) => {
        console.error("Error deleting bot from backend:", error);
        // Revert the change in the frontend if deletion from backend fails
        addToArmy(bot);
      });}

  return (
    <div className="ui column">
     
        <div className="ui card" key={bot.id} onClick={handleClick}>
        <Link to={`/ph2-chall-2/bot/${bot.id}`}>
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          </Link>
          <div className="content">
            <div className="header">
              {bot.name}
              <i className={botTypeClasses[bot.bot_class]} />
            </div>
            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>
            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini red button" onClick={handleRemove}>
                  x
                </button>
              </div>
            </span>
          </div>
        </div>
    
    </div>
  );
}

export default BotCard;
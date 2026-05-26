
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import { toast } from "react-toastify";
const Card = ({player, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleChoosePlayer = () => {


           let newCoin = coin- player.price
          if(newCoin >= 0){
             setCoin(coin-player.price);
          } else{
            toast.error("Not enough coin to purchase this player")
            return;
          }
          toast.success(`${player.playerName} is selected`);
          setIsSelected(true); 
          setSelectedPlayers([...selectedPlayers, player])
         
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
                        
  <figure>
    <img
      src={player.playerImage}
      className="  rounded-2xl h-70 w-full  p-6 object-cover"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser />{player.playerName}</h2>
     <div className="flex justify-between gap-5 items-center">
        <div className="flex gap-2 items-center">
        <IoFlagSharp/>
         <p>{player.playerCountry}</p>
        </div>
       <button className="btn">{player.playerType}</button>
     </div>
      <div className="divider"></div>
       <h2 className="font-bold">Rating {(player.rating)}</h2>
       <div className="flex">
           <p className="font-bold">{player.battingStyle}</p>
           <p className="text-right">{player.bowlingStyle}</p>
       </div>
 
   
     
    <div className="card-actions justify-between items-center">
         <p className="font-semibold">Price: ${player.price}</p>
      <button  onClick={handleChoosePlayer 
       } className="btn" disabled={isSelected}>{isSelected === true ? "Selected" : "Choose Players" }</button>
    </div>
  </div>
</div>
        
    );
};

export default Card;
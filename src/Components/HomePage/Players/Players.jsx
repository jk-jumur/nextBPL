import { use, useState } from "react";
import AvailablePlayers from "././AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";



const Players = ({playersPromise}) => {
      console.log(playersPromise)
    const players = use(playersPromise) 
    console.log(players);
      const [selectedType, setSelectedType] = useState("available");
      console.log(selectedType, "selectedType")
    return (
        <div className="container mx-auto my-[60px]">
      
           <div className="flex justify-between items-center mb-[20px]">

             {selectedType === "available" ? (<h2 className='text-2xl font-bold'>Available Players</h2>) : (<h2 className='text-2xl font-bold'>Selected Players (2/6)</h2>)} 
              <div>
                   <button
                      onClick={()=> setSelectedType("available")}
                    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-gray-200"} rounded-r-none rounded-l-xl`}>Available</button>
                   <button 
                     onClick={() => setSelectedType("selected")}
                   className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-gray-200" } rounded-l-none rounded-r-xl`}>Selected (0)</button>
              </div>
           </div>

         { selectedType === "available" ? (<AvailablePlayers players={players}></AvailablePlayers>) : (<SelectedPlayers></SelectedPlayers>)}
        </div>
    );
};

export default Players;
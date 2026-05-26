import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
     console.log(selectedPlayers, "selectedPlayers")

     const handleDeleteSelectedPlayer = (Player) =>{
           console.log(Player, "player");
           const filteredPlayers = selectedPlayers.filter(
            (selectedPlayer) => selectedPlayer.playerName != Player.playerName);
           console.log(filteredPlayers, "filteredPlayers");
           setSelectedPlayers(filteredPlayers);
           setCoin(coin + Player.price);
     }
    return (
        <div>
            <div className="space-y-4">
            {
                selectedPlayers.map((Player, ind)=>{
                    return <div key={ind} className="flex items-center gap-4 justify-between p-10 rounded-2xl border">
                         <div className="flex items-center gap-6">
                               <img src={Player.playerImage} alt="" className="h-[75px] w-auto rounded-md" />
                               <div>
                                <h2 className="flex items-center gap-2 font-semibold text-2xl"><FaUser />{Player.playerName}</h2>
                                <p>{Player.playerType}</p>

                               </div>
                         </div>
                         <button className='btn text-red-300 text-2xl' onClick={()=> handleDeleteSelectedPlayer(Player)}><MdDelete /></button>
                    </div>
                })
          }

          </div>
        </div>
    );
};

export default SelectedPlayers;
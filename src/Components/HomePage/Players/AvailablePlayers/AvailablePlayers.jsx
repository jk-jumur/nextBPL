
import Card from "../../../LU/Card";

const AvailablePlayers = ({players, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    console.log(players)
    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10 ">
              {
                players.map((player, ind) => {
                       return <Card key={ind} player={player}setCoin={setCoin} coin={coin}selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card> 
                })
             }
            
       </div>   
    );
};

export default AvailablePlayers;
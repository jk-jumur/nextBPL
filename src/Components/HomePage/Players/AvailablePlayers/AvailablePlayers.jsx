
import Card from "../../../LU/Card";

const AvailablePlayers = ({players, setCoin, coin}) => {
    console.log(players)
    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10 ">
              {
                players.map((player) => {
                       return <Card player={player}setCoin={setCoin} coin={coin}></Card> 
                })
             }
            
       </div>   
    );
};

export default AvailablePlayers;
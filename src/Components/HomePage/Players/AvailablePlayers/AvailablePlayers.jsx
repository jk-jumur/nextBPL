
import Card from "../../../LU/Card";

const AvailablePlayers = ({players}) => {
    console.log(players)
    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-10 ">
              {
                players.map((player) => {
                       return <Card player={player}></Card> 
                })
             }
            
       </div>   
    );
};

export default AvailablePlayers;
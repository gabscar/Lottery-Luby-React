import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import {ButtonGameMode, GameSection} from './styles'

interface Game{
    id:number;
    type: string;
    description: string ;
    range: number;
    price: number;
    max_number: number;
    color: string;
}

const GamePanel : React.FC = ()=>{
    const [data, setData]= useState([]);
    const [gameSelected, setGameSelected] = useState<Game>({
        id:0,
        type: '',
        description: '',
        range: 0,
        price: 0,
        max_number: 0,
        color: '',
    })
    useEffect(()=>{
        api.get('/types')
          .then((response)=>setData(response.data));
      },[])
    
    const handleSelectGame = (type:string)=>{
        const game = data.find((item:Game)=>item.type===type)
        if(game)
            setGameSelected(game)
    }
    const betTypes = data.map((item)=>console.log(item));
    
    return(
        <GameSection>
            <div className="title">
                <h2>NEW BET </h2> <p> FOR {gameSelected?.type}</p>
            </div>
            <div className="chooseGame">
                <p>Choose a game</p>
                <div className="GameMode"> 
                   {data.map((item)=>(
                       
                       <ButtonGameMode
                            type="button"
                            color = {item['color']}
                            selected = {gameSelected.type === item['type'] ? true : false}
                            id={item['type']}
                            key={item['type']}
                            value = {item['type']}
                            onClick = {()=>handleSelectGame(item['type'])}
                       >{item['type']}</ButtonGameMode>
                   ))} 
                </div>
            </div>
            <div className="rules">
                <p className="textRule">Fill your bet</p>
                <p className="textRule">{gameSelected.description}</p>
            </div>
           
            
        </GameSection>
    )

}



export default GamePanel;
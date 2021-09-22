import React, { useEffect, useState } from 'react';
import api from '../../Services/api';
import NumberButton from './NumberButton';
import {ButtonGameMode, GameSection} from './styles'
import { FiShoppingCart } from "react-icons/fi";
import {cart} from '../../Pages/NewGamePage'
export interface Game{
    id:number;
    type: string;
    description: string ;
    range: number;
    price: number;
    'max-number': number;
    color: string;
}

interface cartFunc{
    setCart: (setCart:Game,numbers:number[])=>void;
}


const GamePanel : React.FC <cartFunc>= ({setCart})=>{
    const [data, setData]= useState<Game[]>([]);
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const [gameSelected, setGameSelected] = useState<Game>({
        id:0,
        type: '',
        description: '',
        range: 0,
        price: 0,
        'max-number': 0,
        color: '',
    })
    useEffect(()=>{
        api.get('/types')
          .then((response)=>response.data)
          .then((data)=>{
              setData(data);
              setGameSelected(data[0]);
            })
      },[])
    
    const clickNumberHandle=(index:number)=>{
        let limit = gameSelected['max-number'] -selectedNumbers.length 
        if(limit !=0 && !selectedNumbers.includes(index)){
            let newArr = [...selectedNumbers,index];
            setSelectedNumbers(newArr);
        }else if(selectedNumbers.includes(index)){
            setSelectedNumbers(selectedNumbers.filter((item)=>item !==index));
            
        }else if(limit ===0){
            alert(`número máximo de números (${gameSelected['max-number']}) selecionado`)
        }
        console.log(selectedNumbers)
    }
    const generateNumberTable = ()=>{
        let numbers = []
        for(let i=1;i<=gameSelected.range;i++){
           numbers.push( 
                <NumberButton
                    key={i}
                    value={i>9? i: Number("0"+i)}
                    color = {gameSelected.color}
                    selected = {selectedNumbers.includes(i)}
                    onClick = {()=>clickNumberHandle(i)}
                />
            )
        }
        return numbers;
    }
    const handleSelectGame = (type:string)=>{
        const game = data.find((item:Game)=>item.type===type)
        if(game)
            setGameSelected(game)

        setSelectedNumbers([]);
    }
    const addCartHandle = ()=>{
        if(selectedNumbers.length===gameSelected['max-number']){
            setCart(gameSelected,selectedNumbers);
        }
    }
    
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
            <div className="buttons_numbers">
               {generateNumberTable()}
            </div>
            <div className='buttonsActionGame'>
                <div className="buttons-left">
                    <button className="left-btn">Complete game</button>
                    <button className="left-btn">Clear game</button>
                </div>
                <button className="right-btn"
                        onClick={addCartHandle}
                >
                    <FiShoppingCart size={25} style={{ marginRight: "20px" }}
                
                />
                     Add to cart
                </button>
            </div>
           
            
        </GameSection>
    )

}



export default GamePanel;
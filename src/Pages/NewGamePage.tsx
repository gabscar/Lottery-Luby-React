import { useState } from "react";
import CartNewGame from "../components/Cart/CartNewGame";
import GamePanel from "../components/Game/GamePanel";
import { ContainerGames } from "../components/Game/styles";
import { Game } from "../components/Game/GamePanel";
import { dataAtualFormatada } from "../Utils/utilFunctions";

export interface cart{
    type:string;
    numbers:number[];
    value: number;
    color: string;
    data: string;
}

const NewGamePage : React.FC=()=>{
    const [cartItems,setCartItem]= useState<cart[]>([]);

    const addNewItem = (game:Game,selectedNumbers:number[])=>{
        const newCart = [...cartItems, 
            {              
              type: game.type,
              numbers: selectedNumbers,
              color: game.color,
              value: game.price,
              data: dataAtualFormatada(),
            }
        ]
        
        setCartItem(newCart);
    }
    const removeItem = (id:number)=>{
      setCartItem(cartItems.filter((item, index) => index !== id));
    }
    return(
        <ContainerGames>
            <GamePanel setCart= {addNewItem} />
            <CartNewGame CartItem = {cartItems} RemoveCart= {removeItem} setCart = {setCartItem}/>
        </ContainerGames>
    )
}


export default NewGamePage;
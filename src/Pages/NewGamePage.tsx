import { useState } from "react";
import CartNewGame from "../components/Cart/CartNewGame";
import GamePanel from "../components/Game/GamePanel";
import { ContainerGames } from "../components/Game/styles";
import { Game } from "../components/Game/GamePanel";

export interface cart{
    type:string;
    numbers:number[];
    value: number;
    color: string;
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
            }
        ]
        setCartItem(newCart);
    }
    const removeItem = (index:number)=>{
      setCartItem(cartItems.splice(index,1));
    }
    return(
        <ContainerGames>
            <GamePanel setCart= {addNewItem}/>
            <CartNewGame CartItem = {cartItems} RemoveCart= {removeItem}/>
        </ContainerGames>
    )
}


export default NewGamePage;
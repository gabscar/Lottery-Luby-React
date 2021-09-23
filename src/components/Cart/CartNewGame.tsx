
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { CartActions } from '../../store/cart-slice';

import {CartContainer, CartEmptyContainer, CartInsertedItem} from './styles'
import {cart} from '../../Pages/NewGamePage'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import trashImg from '../../assets/trash.png'

interface cartEntrance{
    CartItem : cart[];
    RemoveCart:(index:number)=>void;
}

const CartNewGame: React.FC<cartEntrance> = ({CartItem,RemoveCart})=>{
    const [cartElements,setCartElements]=useState<cart[]>([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        setCartElements(CartItem);
        setTotalPrice(CartItem.reduce((prevItem, currentItem,key) => prevItem + currentItem.value, 0));
    },[CartItem]);
    
    const generateCartElements = ()=>{
        let cart = [];
        if(cartElements.length!==0){
            for(let i=0;i<cartElements.length;i++){
                cart.push(
                    <CartInsertedItem color={cartElements[i].color}>
                        <button onClick={()=>handleDeleteItem(i)}>
                            <img src = {trashImg}></img>
                        </button>
                        <div className="rightDiv">
                            <p className='pNumbers'>{cartElements[i].numbers.join(', ')}</p>
                            <p className='pNameandValue'> <span className="gameMode">{cartElements[i].type}</span>R$ {(cartElements[i].value.toFixed(2)).replace('.',',')}</p>
                        </div>
                    </CartInsertedItem>
                )
            }
        }else{
            cart.push(
                <CartEmptyContainer>
                    Your cart is empty
                </CartEmptyContainer>
            )
        }
        return cart;
    }
    const handleDeleteItem = (id:number)=>{
        RemoveCart(id);
    }
    const saveGamesHandle=()=>{
        if(cartElements.length===0){
            alert('Add some element to cart to continue');
            return;
        }
        if(totalPrice<30){
            alert('The minimum purchase amount is BRL 30.00 ');
            return;
        }
        let cartWithData = [...cartElements,'Data = 0'];
        console.log(cartWithData)
        dispatch(CartActions.buyGames(cartWithData));
        setCartElements([]);
        setTotalPrice(0);
        

    }
    
    return (
        <CartContainer>
            <h2>CART</h2>
            <div className = "cart-element">
                <div className = "cart-item">
                   
                    {generateCartElements()}
                </div>           
                <div className="totalCart">
                    <h2>Cart <span className='total'>Total: R$ {(totalPrice.toFixed(2)).replace('.',',')}</span></h2>
                    
                </div>
                <button className="save-btn" onClick={saveGamesHandle}>
                    Save <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </button>
            </div>
        </CartContainer>
    )
}


export default CartNewGame;

import {CartContainer, CartEmptyContainer, CartInsertedItem} from './styles'
import {cart} from '../../Pages/NewGamePage'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {toast} from 'react-toastify';
import trashImg from '../../assets/trash.png'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../store/cart-slice';
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
        setTotalPrice(CartItem.reduce((prevItem, currentItem) => prevItem + currentItem.value, 0));
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
            toast.warn('Add some element to cart to continue', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        if(totalPrice<30){
            toast.warn('The minimum purchase amount is BRL 30.00 ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
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
                <button className="save-btn">
                    Save <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </button>
            </div>
        </CartContainer>
    )
}


export default CartNewGame;
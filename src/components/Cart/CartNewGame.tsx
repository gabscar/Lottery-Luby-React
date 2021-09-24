
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { CartActions } from '../../store/cart-slice';
import {CartContainer, CartEmptyContainer, CartInsertedItem} from './styles'
import {cart} from '../../Pages/NewGamePage'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {BsTrash} from "react-icons/bs";

interface cartEntrance{
    CartItem : cart[];
    RemoveCart:(index:number)=>void;
    setCart: (cartItem: cart[] | ((previous: cart[]) => cart[])) => void;
}

const CartNewGame: React.FC<cartEntrance> = ({CartItem,RemoveCart,setCart})=>{
    
    const [totalPrice,setTotalPrice]=useState(0);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        setTotalPrice(CartItem.reduce((prevItem, currentItem,key) => prevItem + currentItem.value, 0));
    },[CartItem]);
    
    const generateCartElements = ()=>{
        let cart = [];
        if(CartItem.length!==0){
            for(let i=0;i<CartItem.length;i++){
                let arr =CartItem[i].numbers.map((item)=>{return item<9?('0'+item):`${item}`})
                cart.push(
                    <CartInsertedItem color={CartItem[i].color}>
                        <button onClick={()=>handleDeleteItem(i)}>
                            <BsTrash size={22}/>
                        </button>
                        <div className="rightDiv">
                            <p className='pNumbers'>{arr.sort((a,b)=>{return a>b?1:-1}).join(', ')}</p>
                            <p className='pNameandValue'> <span className="gameMode">{CartItem[i].type}</span>R$ {(CartItem[i].value.toFixed(2)).replace('.',',')}</p>
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
        let confirma = window.confirm('Tem certeza que deseja deletar esse item?');
        if(confirma === true){
            RemoveCart(id);
        }
    }
    const saveGamesHandle=()=>{
        if(CartItem.length===0){
            alert('Adicione R$ 30,00 em compras para prosseguir');
            return;
        }
        if(totalPrice<30){
            alert('O valor mínimo de compras é de R$ 30,00');
            return;
        }
        let cartWithData = [...CartItem];
        
        dispatch(CartActions.buyGames(cartWithData));
        setTotalPrice(0);
        setCart([]);

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
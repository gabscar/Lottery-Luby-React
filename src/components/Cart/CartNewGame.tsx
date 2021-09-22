
import {CartContainer} from './styles'
import {cart} from '../../Pages/NewGamePage'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface cartEntrance{
    CartItem : cart[];
    RemoveCart:(index:number)=>void;
}

const CartNewGame: React.FC<cartEntrance> = ({CartItem,RemoveCart})=>{

    console.log(CartItem)
    return (
        <CartContainer>
            <h2>CART</h2>
            <div className = "cart-element">
                <div className = "cart-item">

                </div>           
                <div className="totalCart">
                    <h2>Cart</h2>
                    <p className='total'>Total: R$ 0,00</p>
                </div>
                <button className="save-btn">
                    Save <FontAwesomeIcon className="icon" icon={faArrowRight} />
                </button>
            </div>
        </CartContainer>
    )
}


export default CartNewGame;
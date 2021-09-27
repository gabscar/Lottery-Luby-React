import { ButtonFilter, ListContainer, RecentGamesContainer,CardGame, EmptyList } from "./styles";
import api from '../../Services/api';
import { Game } from "../Game/GamePanel";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../store/index'
import { cart } from "../../Pages/NewGamePage";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';





const ListRecentGames: React.FC = ()=>{
    const [data, setData]= useState<Game[]>([]);
    const [filterSelect,setFilterSelect]=useState('');    
    const buyedGames = useSelector((state: RootState) => state.cart.items);

    const [listGames,setListGames] = useState<cart[]>(buyedGames);

    const history =useHistory();
    const handleSelectFilter= (e: React.MouseEvent) =>{
        e.preventDefault()
        let type = e.currentTarget.id;
        setFilterSelect(type)
        setListGames(buyedGames);
        if(type !=='' && filterSelect===type){
            type='';
            setFilterSelect('')
            setListGames(buyedGames);
            return;
        }
            
        const filteredItens = buyedGames.filter((item:cart)=>item.type===type);
        setListGames(filteredItens);
        console.log(listGames)
    }
    useEffect(()=>{
        api.get('/types')
          .then((response)=>setData(response.data))
        
      },[])
    
    
    const renderListGames = ()=>{

        return(
            listGames.length===0 ?(<EmptyList>Nada por aqui</EmptyList>
                ):(
                    listGames.map((item)=>(
                        <CardGame color={item.color}>
                            <p className="numbers">{item.numbers.join(', ')}</p>
                            <p className="dateAndValue">{item.data} - (R$ {(item.value.toFixed(2)).replace('.',',')})</p>
                            <span>{item.type}</span>
                        </CardGame>   
                    ))
                )
        )            
    }
    
   
    return(
        <ListContainer >
            <RecentGamesContainer>   
                <div className="Filters"> 
                    <p>Recent Games</p> 
                    <span> filters</span>
                   {data.map((item:Game)=>(                       
                       <ButtonFilter
                            type="button"
                            color = {item['color']}
                            selected = { filterSelect === item['type'] ? true : false }
                            id={item['type']}
                            key={item['type']}
                            value = {item['type']}
                            onClick = {handleSelectFilter}
                       >{item['type']}</ButtonFilter>
                   ))} 
                </div>
                <div className="NewBet">
                    <button onClick={()=>history.push('/game')}>
                         New Bet <FontAwesomeIcon className ="icon" icon={faArrowRight} />
                    </button>
                </div>
            </RecentGamesContainer>
              
            {renderListGames()}
            
        </ListContainer>
    )
}


export default ListRecentGames;
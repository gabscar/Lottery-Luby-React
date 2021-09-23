import { ButtonFilter, ListContainer, RecentGamesContainer } from "./styles";
import api from '../../Services/api';
import { Game } from "../Game/GamePanel";
import { useState, useEffect } from "react";


interface filters{
    type:string;
    color:string;
}

const ListGames: React.FC = ()=>{
    const [data, setData]= useState<Game[]>([]);
    const [filterSelect,setFilterSelect]=useState<filters>({type:'',color:''});
    
    
    useEffect(()=>{
        api.get('/types')
          .then((response)=>response.data)
          .then((data)=>{
              setData(data);  
            }) 
      },[])
    

      const handleSelectFilter=(type:string)=>{
        const filter = data.find((item:Game)=>item.type===type)
        if(filter)
            setFilterSelect({
                type:filter.type,
                color: filter.color
            })
      }
    return(
        <ListContainer >
            <RecentGamesContainer>   
                <div className="Filters"> 
                    <p>Recent Games</p> 
                    <span> filters</span>
                   {data.map((item)=>(                       
                       <ButtonFilter
                            type="button"
                            color = {item['color']}
                            selected = { filterSelect.type === item['type'] ? true : false }
                            id={item['type']}
                            key={item['type']}
                            value = {item['type']}
                            onClick = {()=>(handleSelectFilter(item['type']))}
                       >{item['type']}</ButtonFilter>
                   ))} 
                </div>
                <div className="NewBet">
                    <button>
                         New Bet
                    </button>
                </div>
            </RecentGamesContainer>
            <div className="listCard">
                <p className="numbers">1, 2, 3, 4, 5, 6, 7, 8, 9</p>
                <p className="dateAndValue">00/00/0000 - (R$ 2,50)</p>
                <span>Mega Sena</span>
            </div>
            
        </ListContainer>
    )
}


export default ListGames;
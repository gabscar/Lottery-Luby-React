import { ButtonNumber } from "./styles";


interface Button{
    value: number;
    color: string;
    selected: boolean;
    onClick : ()=>void;
    
}
const NumberButton :React.FC<Button>= ({value,color,selected,onClick})=>{

    return(
        <ButtonNumber
            color = {selected ? color:'#ADC0C4'}
            onClick={onClick}
        >
            {value}
        </ButtonNumber>
    )
}


export default NumberButton;
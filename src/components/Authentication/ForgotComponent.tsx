import { useRef } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { ContainerForm} from './styles'


const ForgotComponent :React.FC =()=>{

    const emailInputRef = useRef<HTMLInputElement>(null);
    

    const history = useHistory();
  
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current!.value;
        
    }

    return(
        <ContainerForm>
            <h1> Reset Password </h1>
            <div className="formDivForgot">
                <form onSubmit={submitHandler}>
                    <input type='email' id='email'  placeholder ="Email" required ref={emailInputRef} />
                    <div>
                        <button className ="submit-forgot"type="submit">
                            Send Link  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        </button>
                    </div>
                </form>
                <button className="signUpButton" type="button"
                onClick = {()=>{history.push('/')}}
                >
                    Back <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            
        </ContainerForm>
    )
}





export default ForgotComponent;
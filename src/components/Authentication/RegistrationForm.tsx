import { useRef } from 'react';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { ContainerForm} from './styles'


const RegistrationForm :React.FC =()=>{

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);

    const history = useHistory();
  
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;
        const enteredName = nameInputRef.current!.value;
        console.log(enteredEmail,enteredPassword,enteredName)
    }

    return(
        <ContainerForm>
            <h1> Registration </h1>
            <div className="formDiv">
                <form onSubmit={submitHandler}>
                    
                    <input type='text' id='name'  placeholder ="Name" required ref={nameInputRef} />
                    <input type='email' id='email'  placeholder ="Email" required ref={emailInputRef} />
                    <input
                        type='password'
                        id='password'
                        placeholder ="Senha"
                        required
                        ref={passwordInputRef}
                    />
                   
                    <div>
                        <button type="submit">
                            Register  <FontAwesomeIcon icon={faArrowRight} />
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





export default RegistrationForm;
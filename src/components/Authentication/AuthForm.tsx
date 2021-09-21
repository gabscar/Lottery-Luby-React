import { useRef, useContext } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContainerForm} from './styles'
const AuthForm :React.FC =()=>{

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);


  
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;
    }

    return(
        <ContainerForm>
            <h2> Authentication </h2>
            <div className="formDiv">
                <form onSubmit={submitHandler}>
                    
                  
                    <input type='email' id='email'  placeholder ="Email" required ref={emailInputRef} />
                    <input
                        type='password'
                        id='password'
                        placeholder ="Senha"
                        required
                        ref={passwordInputRef}
                    />
                    <button
                        type="button"
                        className = "forgot"

                    >
                        I forgot my password 
                    </button>
                    <div>
                        <button type="submit">
                            Log In  <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </form>
                <button className="signUpButton" type="button">
                    Sign Up <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            
        </ContainerForm>
    )
}





export default AuthForm;
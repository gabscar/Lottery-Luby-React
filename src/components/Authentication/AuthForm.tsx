import { useRef } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { AuthActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';

import { ContainerForm} from './styles'
const AuthForm :React.FC =()=>{

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const history = useHistory();
    const dispatch = useDispatch();
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;
        dispatch(AuthActions.login({            
            name: 'gabriel',
            email:'gabriel@mail.com',
            password:'123456',
            administrator: false            
        }));
        history.push('/game');
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
                        onClick={()=>{history.push('/forgot')}}
                    >
                        I forgot my password 
                    </button>
                    <div>
                        <button type="submit">
                            Log In  <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </form>
                <button className="signUpButton" type="button" onClick={()=>{history.push('/register')}}>
                    Sign Up <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            
        </ContainerForm>
    )
}





export default AuthForm;
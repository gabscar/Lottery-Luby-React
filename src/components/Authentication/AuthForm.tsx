import { useRef, useContext } from 'react';


import { Container} from './AuthFormStyle'
const AuthForm :React.FC =()=>{

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);


  
    
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    
        const enteredEmail = emailInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;
    }

    return(
        <Container>
            <div className="formDiv">
                <form onSubmit={submitHandler}>
                    <h2> Authentication </h2>
                
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
                            Log In 
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}





export default AuthForm;
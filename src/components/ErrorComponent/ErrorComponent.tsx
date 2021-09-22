import { ErrorContainer } from "./style"
import { useHistory } from "react-router";

const ErrorComponent:React.FC = () =>{

    const history = useHistory();

    return (
        <ErrorContainer>
            <div className="landing-page">
               
                <h1> 404 Error</h1>
                <p> We can't find the page you're looking for</p>
                <button onClick={()=>{history.push('/')}}>Back to home</button>
            </div>
        </ErrorContainer>
    )
}

export default ErrorComponent;
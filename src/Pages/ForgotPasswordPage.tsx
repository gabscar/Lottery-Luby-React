
import AuthBanner from '../components/Authentication/AuthBanner';
import ForgotComponent from '../components/Authentication/ForgotComponent';
import { ContainerMain } from '../components/Authentication/styles';


const ForgotPasswordPage = ()=>{

    return(
        <ContainerMain>
            <AuthBanner/>
            <ForgotComponent/>
        </ContainerMain>
    )
}

export default ForgotPasswordPage;

import AuthBanner from '../components/Authentication/AuthBanner';
import AuthForm from '../components/Authentication/AuthForm';
import { ContainerMain } from '../components/Authentication/styles';


const LoginPage = ()=>{

    return(
        <ContainerMain>
            <AuthBanner/>
            <AuthForm/>
        </ContainerMain>
    )
}

export default LoginPage;
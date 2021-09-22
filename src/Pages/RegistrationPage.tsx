
import AuthBanner from '../components/Authentication/AuthBanner';

import RegistrationForm from '../components/Authentication/RegistrationForm';
import { ContainerMain } from '../components/Authentication/styles';


const RegistrationPage = ()=>{

    return(
        <ContainerMain>
            <AuthBanner/>
            <RegistrationForm/>
        </ContainerMain>
    )
}

export default RegistrationPage;
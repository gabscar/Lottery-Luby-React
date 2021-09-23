
import { Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import Header from '../components/Layout/header';
import  Footer  from '../components/Layout/footer';
import { useSelector } from "react-redux";
import { RootState } from "../store";

import RegistrationPage from '../Pages/RegistrationPage';
import LoginPage from '../Pages/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ForgotPasswordPage from '../Pages/ForgotPasswordPage';
import NewGamePage from "../Pages/NewGamePage";
import HomePage from "../Pages/HomePage";




const Routes = ()=>{

    const isAuth = useSelector((state: RootState) => state.auth.isLoggedin);
    return(
        <BrowserRouter>
            {isAuth && <Header/>}
            
            <Switch>
                <Route path='/' exact>
                    <Redirect to="/login"/>
                </Route>
                <Route path='/login' exact>
                    <LoginPage/>
                </Route>
                <Route path='/register' exact>
                    <RegistrationPage/>
                </Route>
                <Route path='/forgot' exact>
                    <ForgotPasswordPage/>
                </Route>
                <Route path='/game' exact>
                    {isAuth&& <NewGamePage/>}
                    {!isAuth && <Redirect to="/login"/>}
                </Route>
                <Route path='/home' exact>
                    {isAuth&& <HomePage/>}
                    {!isAuth && <Redirect to="/login"/>}
                </Route>
                <Route path ='*'>
                    <NotFoundPage/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routes;
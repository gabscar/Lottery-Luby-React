import React from 'react';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import Header from '../components/Layout/header';
import { Footer } from '../components/Layout/styles';
import LoginPage from '../Pages/LoginPage';


const Routes = ()=>{

    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact>

                </Route>
                <Route path='/login' exact>
                    <LoginPage/>
                </Route>
            </Switch>
           <Footer/>
        </BrowserRouter>
    )
}


export default Routes;
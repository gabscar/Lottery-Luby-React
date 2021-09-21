import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginPage from '../Pages/LoginPage';


const Routes = ()=>{

    return(
        <>
            <Switch>
                <Route path='/' exact>

                </Route>
                <Route path='/login' exact>
                    <LoginPage/>
                </Route>
            </Switch>
        </>
    )
}


export default Routes;
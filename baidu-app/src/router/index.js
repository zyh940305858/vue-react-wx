import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routerconfig';
import RouterView from './routerview';

let RootRouter = function RootRouter() {
    return (<Router>
        <RouterView routes={routes}>

        </RouterView>
    </Router>)
}

export default RootRouter;

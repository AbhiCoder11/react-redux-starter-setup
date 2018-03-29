import React from 'react';

import {Switch,Route,BrowserRouter} from 'react-router-dom';

import App from './App';
import Pagetwo from './components/PageTwo';

const Root=()=>(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/pagetwo" component={Pagetwo}/>
         </div>
     </BrowserRouter>   
)

export default Root;




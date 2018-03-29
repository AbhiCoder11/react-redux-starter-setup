import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

import Routes from './routes';

import configureStore from './store/store';

const store=configureStore();


const MyApp = () =>{ 
    return(
    <Provider store={store}>
      <Routes/>
    </Provider>   );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));

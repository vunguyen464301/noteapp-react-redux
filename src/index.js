import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import AllReducers from './reducers/index';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {add_task,add_data} from './actions/index';
import {KEY_LOCALSTORAGE} from './Utils/index'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const store = createStore(AllReducers);

// [ 'breakfast','lunch','dinner']
// .forEach((name)=>store.dispatch(add_task(name)));
if(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE))!==null ){
  JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)).forEach(element => {
    store.dispatch(add_data(element));
  });
}


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

let data=[
    {
      id:"234234isodfjs",
      name:"breakfast"
    },
    {
      id:"234234isodfsdfjs",
      name:"lunch"
    },
    {
      id:"23423sd4isodfjs",
      name:"dinner"
    }, 
  ]
  // localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(data) )
  // console.log(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)))
 

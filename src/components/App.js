import React from 'react';
import './App.css';
import ModalEditTask from '../containers/ModalEditTask'
import AddTask from '../containers/AddTask';
import ListTask from '../containers/ListTask';
import {KEY_LOCALSTORAGE} from '../Utils/index';

const App=()=> {
 
  return (
   <div className="container">
     <div className="center">
     <h3>Note App</h3>
     </div>
     <AddTask/>
     <ListTask/>
     <ModalEditTask/>
   </div>
  );
}



export default App;

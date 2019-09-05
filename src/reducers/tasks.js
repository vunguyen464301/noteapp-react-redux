import {ADD_TASK,REMOVE_TASK, EDIT_TASK,ADD_DATA} from '../actions/actionTypes';
import {KEY_LOCALSTORAGE} from '../Utils/index';
const saveData=(data)=>{
  let d =[];    
  if(typeof localStorage.getItem(KEY_LOCALSTORAGE)==='string'){
    //===string => isArray=true
    console.log('vo day')
    d=JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  }
  d.push(data);
  localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(d));
}
const config_data=(data)=>{
  let d=[];
 Object.keys(data).map((id, index) => {
    // return <Task
    // key={index}
    // {...data[id]}/>
    d.push(data[id]);
    console.log(data[id])  
  });
  // console.log(d)
  localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(d));
}
const tasks = (state = {}, action) => {
    switch (action.type) {
      case ADD_TASK:
        saveData(action);
        return {
           ...state,
            [action.id]: (state,action)
        };
      case REMOVE_TASK:
            const rest = {...state} ;
            delete rest[action.id];
            // localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(rest));
           config_data(rest);
            return rest;
    case EDIT_TASK:
      let data={...state}
      data[action.id]=(state,action);
      let d=[];
      Object.keys(data).map((id,index)=>{
        d.push(data[id]);
      })
      localStorage.setItem(KEY_LOCALSTORAGE,JSON.stringify(d));
            return {
                ...state,
                [action.id]: (state,action)
                
             };
    case ADD_DATA:
      return{
        ...state,
        [action.id]: (state,action)
      }
        default:
        return state;
    }
  };
export default tasks;
  
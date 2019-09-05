import React from 'react';
import { connect } from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/index';
import {KEY_LOCALSTORAGE} from '../Utils/index';
const AddTask =({actions})=>{
    let input;
    const btn_add = () => {
        const node = findDOMNode(input);
        if (node.value.length > 0) {
        //   actions.addLocationAndFetchWeather(node.value);
        actions.add_task(node.value);
        console.log(node.value)
        node.value = '';
        
        };
      };
     
            return(
                <div className="center">
                <input className="form-control mr-2"
                 type="search" 
                 placeholder="New" 
                 ref={node => (input = node)}
                  />
                  {/* btn_add() */}
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                    onClick={() => {btn_add() }}>Add</button>
                </div>
            
                 )   
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
  });
  
export default connect(undefined,mapDispatchToProps)(AddTask);;

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ add_task: add_task }, dispatch);
// }

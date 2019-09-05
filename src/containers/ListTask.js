import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import*as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import {KEY_LOCALSTORAGE} from '../Utils/index'
const ListTask = ({ tasks ,actions }) => {
    var showData =(data)=> Object.keys(data).map((id, index) => {
        return <Task
        key={index}
        {...data[id]}/>
    });
    return (
        <ul className="list-group mt-5">
            <li
                onClick={() => { console.log(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE))) }}
                className="list-group-item danger bg-danger text-light" >
                <h5 style={{ textAlign: 'center' }}>
                    List
    </h5>
            </li>
            {showData(tasks)}
           
        </ul>
    )

}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});
const mapDispatchToState =(dispatch)=>({
    actions:bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToState)(ListTask);;
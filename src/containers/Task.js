import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as Actions from '../actions/index'

const Task = ({ id, name, actions }) => {
   
     
    const btn_remove = (id) => {
        actions.remove_task(id)
    }
    const btn_edit = (id) => {
        // console.log(id+" : "+name)
        actions.openModal(id,name)
        // actions.edit_task(id,name)
    }
   
    return (
        <li className="list-group-item">{name}
            <div className="float-right">
                <i style={{ fontSize: '24px' }} className="fa fa-pencil mr-3 text-primary" 
                onClick={() => { btn_edit(id) }}></i>
                <i className="fa fa-trash text-primary" 
                    style={{ fontSize: '25px' }}
                    onClick={() => { btn_remove(id) }}></i>
            </div>
        </li>
    )
}
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
});
export default connect(
    undefined,
    mapDispatchToProps
)(Task);
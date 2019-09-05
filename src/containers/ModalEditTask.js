import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *as Actions from '../actions/index'
import { Button, Modal} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';
const ModalEditTask = ({isShow,id,name,actions}) => {
  let input;
    const btn_edit = () => {
        const node = findDOMNode(input);
        if (node.value.length > 0) {
        actions.edit_task(id,node.value);
        console.log(node.value)
          node.value = '';
        };
        actions.closeModal();
      };
    return (
        <>
      <Modal show={isShow} onHide={actions.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>EDIT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input className="form-control mr-2"
                 type="search" 
                 placeholder={name}
                 ref={node => (input = node)}
                  />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={actions.closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{btn_edit()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
const mapStateToProps = (state) => ({
  isShow: state.modal.show,
  id:state.modal.id,
  name:state.modal.name
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditTask);

// export default Tasks;
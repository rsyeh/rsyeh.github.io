import React,{ Component } from 'react'
import { Modal } from 'semantic-ui-react'
import mastermind from './../../mastermind'



class ModalName extends Component {

  closeModal = () => {
    mastermind.update('updateModalState', {
      modalName: '',
      updates: {}
    })
  }

  render() {
    return(
      <Modal open={false} onClose={this.closeModal.bind(this)}>
        <Modal.Header className=""></Modal.Header>
        <Modal.Conent className=""></Modal.Conent>
      </Modal>
    )
  }
}

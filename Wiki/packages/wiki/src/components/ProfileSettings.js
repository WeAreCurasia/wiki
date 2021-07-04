import React, { Component } from 'react';
import Show from 'baseui/icon/show';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

export default class ProfileSettings extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      fullName: '',
      email: '',
      image: '',
    };

    this.setIsOpen = this.setIsOpen.bind(this);
  }

  setIsOpen(bool) {
    this.setState({
      isOpen: bool,
    });
  }

  changeFullName = event => {
    this.setState({
      fullName: event.target.value,
    });
    console.log(this.state.fullName);
  };

  changeEmail = event => {
    this.setState({
      email: event.target.value,
    });
    console.log(this.state.email);
  };

  changeImage = event => {
    this.setState({
      image: event.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const isOpen = this.state.isOpen;
    return (
      <>
        {/* <span className = "icons"><Show /></span> */}
        <h3 className="blocks" onClick={this.setIsOpen.bind(this, true)}>
          Profile & Settings
        </h3>

        <Modal onClose={this.setIsOpen.bind(this, false)} isOpen={isOpen}>
          <ModalHeader>Profile & Settings</ModalHeader>
          <ModalBody>
            <form action="" method="" onSubmit={() => this.submitHandler}>
              <div className="formField">
                <label className="formLabel">Name: </label>
                <input
                  type="text"
                  placeholder="Enter yout name"
                  value={this.state.fullName}
                  onChange={this.changeFullName}
                />
              </div>
              <div className="formField">
                <label className="formLabel">Email: </label>
                <input
                  type="email"
                  placeholder="Enter yout name"
                  value={this.state.email}
                  onChange={this.changeEmail}
                />
              </div>
              <div className="formField">
                <label className="formLabel">Email: </label>
                <input type="text" />
              </div>
              <button type="submit">Edit</button>
            </form>
          </ModalBody>

          <ModalFooter>
            <ModalButton kind="tertiary" onClick={this.close}>
              Cancel
            </ModalButton>
            <ModalButton onClick={this.setIsOpen.bind(this, false)}>
              Okay
            </ModalButton>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

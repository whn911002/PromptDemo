import React, { Component } from "react";
import Prompt from "./Prompt";

class PromptButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, text: "默认文本" };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClose = () => {
    this.handleClick();
  };

  handleConfirm = inputText => {
    this.setState({ text: inputText });
    this.handleClick();
  };

  handleClick = () => {
    if (!this.state.isOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.toggleModal();
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (document.getElementById("modalDemo").contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  render() {
    return (
      <div className="PromptButton">
        <button className="btn btn-primary m-2" onClick={this.handleClick}>
          点击打开弹窗
        </button>

        <Prompt
          show={this.state.isOpen}
          onClose={this.handleClose}
          onConfirm={this.handleConfirm}
        >
          通用弹框
        </Prompt>
        <p className="m-2">{this.state.text}</p>
      </div>
    );
  }
}

export default PromptButton;

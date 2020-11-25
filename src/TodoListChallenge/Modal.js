import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom";

let node = null;
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(next, prev) {
    node && ReactDOM.render(<ModalBox {...next} />, node);
    return next;
  }

  componentDidMount() {
    console.log("this.state: ", this.state);
    node = document.createElement("div");
    document.body.appendChild(node);
    ReactDOM.render(<ModalBox {...this.props} />, node);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(node);
    node.parentNode && node.parentNode.removeChild(node);
  }

  render() {
    return <script />;
  }
}

export default Modal;

const ModalBox = (props) => {
  return (
    <div
      className={props.open ? "modalContainer" : "hide"}
      onClick={props.onClose}
    >
      <div className="modal">{props.clickedItem}</div>
    </div>
  );
};

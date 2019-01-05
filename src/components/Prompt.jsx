import React from "react";
import PropTypes from "prop-types";

class Prompt extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,
      maxWidth: 250,
      minHeight: 280,
      margin: "0 auto",
      padding: 30
    };

    return (
      <div style={backdropStyle}>
        <div id="modalDemo" style={modalStyle}>
          {this.props.children}
          <br />
          <textarea id="inputArea" rows="4" columns="10" />
          <div className="footer">
            <button
              className="btn btn-primary m-3"
              onClick={() =>
                this.props.onConfirm(document.getElementById("inputArea").value)
              }
            >
              确定
            </button>
            <button
              className="btn btn-warning m-3"
              onClick={this.props.onClose}
            >
              取消
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Prompt.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default Prompt;

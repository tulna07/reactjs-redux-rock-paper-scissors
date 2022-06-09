import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    return (
      <div className="player flex flex-col items-center justify-center">
        <div className="think relative bg-white w-[100px] h-[100px] border-[5px] border-solid border-[#45D994] rounded-[10px]">
          {" "}
          <img
            className="w-[50px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
            src={`./img/rock-paper-scissors/${this.props.botChoose}.png`}
            alt="bao"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="w-[150px]"
          src="./img/rock-paper-scissors/playerComputer.png"
          alt="player"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ botChoose: state.rpsReducer.botChoose });

export default connect(mapStateToProps, null)(Bot);

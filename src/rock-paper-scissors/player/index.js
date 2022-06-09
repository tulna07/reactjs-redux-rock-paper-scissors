import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="player flex flex-col items-center justify-center">
        <div className="think relative bg-white w-[100px] h-[100px] border-[5px] border-solid border-[#45D994] rounded-[10px]">
          {" "}
          <img
            className="w-[50px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
            src={`./img/rock-paper-scissors/${this.props.playerChoose}.png`}
            alt="bao"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="w-[150px]"
          src="./img/rock-paper-scissors/player.png"
          alt="player"
        />

        <div className="flex gap-[10px]">
          <div className="basis-1/3">
            <button
              className="bg-white focus:bg-orange-500"
              onClick={() => this.props.chooseItem("bao")}
            >
              <img
                className="w-[50px]"
                src="./img/rock-paper-scissors/bao.png"
                alt="bao"
              />
            </button>
          </div>
          <div className="basis-1/3">
            <button
              className="bg-white focus:bg-orange-500"
              onClick={() => this.props.chooseItem("bua")}
            >
              <img
                className="w-[50px]"
                src="./img/rock-paper-scissors/bua.png"
                alt="bua"
              />
            </button>
          </div>
          <div className="basis-1/3">
            <button
              className="bg-white focus:bg-orange-500"
              onClick={() => this.props.chooseItem("keo")}
            >
              <img
                className="w-[50px]"
                src="./img/rock-paper-scissors/keo.png"
                alt="keo"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerChoose: state.rpsReducer.playerChoose,
});

const mapDispatchToProps = dispatch => ({
  chooseItem: item => dispatch({ type: "CHOOSE_ITEM", payload: item }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);

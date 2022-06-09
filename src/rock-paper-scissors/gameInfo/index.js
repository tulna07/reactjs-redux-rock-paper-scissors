import React, { Component } from "react";
import { connect } from "react-redux";

class GameInfo extends Component {
  render() {
    return (
      <div className="game-info">
        <div className=" flex flex-col gap-[20px] mb-5">
          <p className="notice text-yellow-500 text-4xl">{this.props.notice}</p>
          <p className="winMatch text-green-500 text-4xl">
            Win match:{" "}
            <span className="text-yellow-500">{this.props.winMatch}</span>
          </p>
          <p className="totalMatch text-green-500 text-4xl">
            Total match:{" "}
            <span className="text-yellow-500">{this.props.totalMatch}</span>
          </p>
        </div>
        <button
          className="text-white bg-green-500 text-2xl p-2 rounded-[5px]"
          onClick={() => this.props.playGame()}
        >
          Play Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  winMatch: state.rpsReducer.winMatch,
  totalMatch: state.rpsReducer.totalMatch,
  notice: state.rpsReducer.notice,
});

const mapDispatchToProps = dispatch => ({
  playGame: () => dispatch({ type: "PLAY_GAME" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);

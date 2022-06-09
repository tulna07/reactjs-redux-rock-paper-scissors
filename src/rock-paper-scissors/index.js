import React, { Component } from "react";
import "./index.css";
import GameInfo from "./gameInfo";
import Player from "./player";
import Bot from "./bot";

export default class RpsGame extends Component {
  render() {
    return (
      <div
        className="game fixed w-full h-full"
        style={{
          background:
            "url('./img/rock-paper-scissors/bgGame.png') center / cover",
        }}
      >
        <div className="flex text-center mt-4">
          <div className="basis-1/3">
            <Player />
          </div>
          <div className="basis-1/3">
            <GameInfo />
          </div>
          <div className="basis-1/3">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

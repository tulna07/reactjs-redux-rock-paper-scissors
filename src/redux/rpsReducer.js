const defaultState = {
  playerChoose: "bao",
  botChoose: "bao",
  notice: "You win !!! I <3 U 3000",
  winMatch: 0,
  totalMatch: 0,
};

const items = ["bao", "bua", "keo"];

const rpsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHOOSE_ITEM":
      state.playerChoose = action.payload;
      break;
    case "PLAY_GAME":
      state.totalMatch++;

      state.botChoose = items[Math.floor(Math.random() * 3)];

      if (
        (state.playerChoose === "bao" && state.botChoose === "bua") ||
        (state.playerChoose === "keo" && state.botChoose === "bao") ||
        (state.playerChoose === "bua" && state.botChoose === "keo")
      ) {
        state.notice = "You win !!! I <3 U 3000";
        state.winMatch++;
        break;
      }

      if (state.playerChoose === state.botChoose) {
        state.notice = "tie";
        break;
      }

      state.notice = "You lose!";

      break;
    default:
      break;
  }

  return { ...state };
};

export default rpsReducer;

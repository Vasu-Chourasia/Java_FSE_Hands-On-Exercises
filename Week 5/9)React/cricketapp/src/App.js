import React from "react";

import { ListofPlayers, ScoreBelow70 } from "./components/ListofPlayers";

import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
} from "./components/IndianPlayers";

function App() {
  const flag = false;

  if (flag) {
    return (
      <div>
        <ListofPlayers />

        <hr />

        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <OddPlayers />

        <hr />

        <EvenPlayers />

        <hr />

        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;

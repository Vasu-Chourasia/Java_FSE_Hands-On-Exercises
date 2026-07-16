import React from "react";

const IndianTeam = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Yuvraj",
  "Raina"
];

// Destructuring
const [first, second, third, fourth, fifth, sixth] = IndianTeam;

export function OddPlayers() {
  return (
    <div>
      <h1>Odd Players</h1>

      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}

export function EvenPlayers() {
  return (
    <div>
      <h1>Even Players</h1>

      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}
const T20players = [
  "First Player",
  "Second Player",
  "Third Player"
];

const RanjiPlayers = [
  "Fourth Player",
  "Fifth Player",
  "Sixth Player"
];

const IndianPlayers = [...T20players, ...RanjiPlayers];

export function ListofIndianPlayers() {
  return (
    <div>
      <h1>List of Indian Players Merged</h1>

      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "k",
    "Q",
    "A"
  ];
  const palo = ["♦", "♥", "♠", "♣"];
  let header = document.querySelector("#card_Header");
  let footer = document.querySelector("#card_Footer");
  let body = document.querySelector(".body");

  const random = value => {
    let index = Math.floor(Math.random() * value.length);
    return value[index];
  };

  const symbol = random(palo);

  if (symbol == "♦" || symbol == "♥") {
    header.style.color = "red";
    footer.style.color = "red";
  }

  body.textContent = random(numbers);
  header.textContent = symbol;
  footer.textContent = symbol;
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excusa = () => {
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = "Esta es una excusa";

  let who = ["the dog", "my granma", "his turtle", "my bird"];

  let aleatoriaWho = Math.floor(Math.random() * who.length);
  console.log("excusa de quien", who[aleatoriaWho]);

  let what = ["eat", "pissed", "crushed", "broked"];

  let aleatoriaWhat = Math.floor(Math.random() * what.length);
  console.log("excusa de que", what[aleatoriaWhat]);

  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let aleatoriaWhen = Math.floor(Math.random() * when.length);
  console.log("excusa de donde", when[aleatoriaWhen]);

  excuse.innerHTML = "<h1>" + who[randomwho] + "</h1>";
  excuse.innerHTML = "<h1>" + what[randomwhat] + "</h1>";
  excuse.innerHTML = "<h1>" + when[randomwhen] + "</h1>";
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  excusa();
};

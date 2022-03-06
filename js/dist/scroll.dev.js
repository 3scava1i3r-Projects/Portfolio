"use strict";

var ScrollReveal = require("scrollreveal");

var scrollEffect = function scrollEffect() {
  console.log("sbvjsjhsbkjsdbjsksnvksfv");
  var slideUp = {
    distance: "150%",
    origin: "bottom",
    opacity: null
  };
  var nodeArray = [document.getElementById("projects"), document.getElementById("proj-section"), document.getElementById("upper-3")];
  ScrollReveal().reveal(nodeArray);
};

scrollEffect();
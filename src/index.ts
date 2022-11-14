import "bootstrap";
import * as $ from "jquery";
import Age from "./scripts/age";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";

import space from "./assets/Images/space.jpg";

// Input forms
const yearInput = $("#days");
const settingAge = new Age();

function handleForm() {
  const yearDays = Number(yearInput.val());
  const ageNum = Number($("#age").val());
  const spaceAge = new Age(yearDays, ageNum);
  $("#result").html(`
    <h1>Result:</h1>
    <h3>Age: ${ageNum}</h3>
    <h3>Days in year: ${yearDays}</h3>
    <h3>Space Age: ${spaceAge.getAge()}</h3>
    <h3>Years left: ${spaceAge.personalExpect()}</h3>
  `);
}

$("form").on("submit", (event) => {
  event.preventDefault();
  handleForm();
});

// Shorthand buttons

$("#earth-btn").on("click", () => {
  yearInput.val(settingAge.earthYear.toFixed(2));
});

$("#merc-btn").on("click", () => {
  yearInput.val(settingAge.mercYear.toFixed(2));
});

$("#venus-btn").on("click", () => {
  yearInput.val(settingAge.venusYear.toFixed(2));
});

$("#mars-btn").on("click", () => {
  yearInput.val(settingAge.marsYear.toFixed(2));
});

$("#jupi-btn").on("click", () => {
  yearInput.val(settingAge.jupiYear.toFixed(2));
});

// Body background image

$("body")[0].style.backgroundImage = `url(${space})`;
import "bootstrap";
import * as $ from "jquery";
import Age from "./scripts/age";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";

function handleForm() {
  const yearDays = Number($("#days").val());
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
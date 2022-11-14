import "bootstrap";
import * as $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";

function handleForm() {
  console.log(0);
}

$("form").on("submit", (event) => {
  event.preventDefault();
  handleForm();
});
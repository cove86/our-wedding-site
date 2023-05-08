"use strict";

window.addEventListener("load", function () {
  const form = document.getElementById("rsvp");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Thank you, we look forward to seeing you!");
    });
  });
});

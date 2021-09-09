"use strict";

function returnStatus(req, status, address) {
  //console.log(req);
  if (status == 200) {
    window.location = address;
  } else {
    var input = document.getElementById("password");
    input.value = "";
    input.classList.add("is-invalid");
    input.setAttribute("placeholder", "Nope! Prøv igjen!");
  }
}

function fetchStatus(address) {
  var client = new XMLHttpRequest();
  client.onreadystatechange = function () {
    // in case of network errors this might not give reliable results
    if (this.readyState == 4) returnStatus(this, this.status, address);
  };
  client.open("HEAD", address);
  client.send();
}

function loadPage(pwd) {
  var hash = CryptoJS.SHA1(pwd);
  var url = hash + "/index.html";
  fetchStatus(url);
}

const button = document.getElementById("password-submit");
button.addEventListener("click", (event) => {
  loadPage(document.getElementById("password").value);
});

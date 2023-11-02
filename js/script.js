var darkMode = false;

if (localStorage.getItem("theme") === "dark") {
  darkMode = true;
} else if (localStorage.getItem("theme") === "light") {
  darkMode = false;
}

var ele = document.body;
if (darkMode) {
  ele.classList.toggle("dark");
}
function switchBody() {
  ele.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    ele.classList.contains("dark") ? "dark" : "light"
  );
}

function showDate() {
  var d = new Date();
  var hour = d.getHours() % 12;
  var min = d.getMinutes();
  var sec = d.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }
  var all = hour + ":" + "" + min + ":" + "" + sec;
  document.getElementById("time").innerHTML = all;
  document.getElementById("time").style.color = "blueviolet";
  setTimeout(showDate, 3000);
}

showDate();

function formValidation() {
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  var phone = document.getElementById("exampleInputPhone1").value;
  var error = document.getElementById("help");

  var text = "";
  if (email.indexOf("@") == -1 || email.lenght == "") {
    text = "Please Enter A Valid Email";
    error.style.display = "block";
    error.innerHTML = text;
    return false;
  } else if (password.lenght < 10) {
    text = "Please Enter A Valid Password";
    error.style.display = "block";
    error.innerHTML = text;
    return false;
  } else if (phone.lenght <= 13) {
    text = "Please Enter A Valid Phone Number";
    error.style.display = "block";
    error.innerHTML = text;
    return false;
  } else {
    return true;
  }
}

var elt = document.getElementById("textarea");
var lengthof = elt.getAttribute("maxlength");
var elc = document.getElementById("count");
elc.innerHTML = lengthof;
elt.onkeyup = function () {
  document.getElementById("count").innerHTML = lengthof - this.value.length;
};

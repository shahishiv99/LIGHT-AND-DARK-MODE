const toggleSwitch = document.querySelector('input[type="checkbox"]');
const imgShopping = document.getElementById("imgShopping");
const imgTraveling = document.getElementById("imgTraveling");
const imgEducation = document.getElementById("imgEducation");
const toggleText = document.getElementById("toggleText");
const icon = document.getElementById("icon");
// image update
function imageMode(color) {
  imgShopping.src = `${color}-undraw_shopping_bags_nbp4.svg`;
  imgTraveling.src = `${color}-undraw_traveling_yhxq.svg`;
  imgEducation.src = `${color}-undraw_educator_re_ju47.svg`;
}

// Dark Mode
function darkMode() {
  toggleText.textContent = "Dark Mode";
  icon.classList.replace("fa-sun", "fa-moon");
  imageMode("Dark");
}
// Light Mode
function lightMode() {
  toggleText.textContent = "Light Mode";
  icon.classList.replace("fa-moon", "fa-sun");
  imageMode("Light");
}
//  Mode ON/OFF
function switchTheme(event) {
  //   console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// click Event
toggleSwitch.addEventListener("change", switchTheme);

// Save Mode Data localStorage

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", "currentTheme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
    toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
    lightMode();
  }
}

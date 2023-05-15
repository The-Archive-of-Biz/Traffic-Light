function ChangeRed() {
  document.getElementById("light").src = "https://assets.digital.cabinet-office.gov.uk/media/559fbe1940f0b6156700004d/traffic-light-red.jpg";
}
function ChangeYellow() {
  document.getElementById("light").src = "https://assets.digital.cabinet-office.gov.uk/media/559fbe31e5274a155c000056/traffic-light-red-amber.jpg";
}
function ChangeGreen() {
  document.getElementById("light").src = "https://assets.digital.cabinet-office.gov.uk/media/559fbe3e40f0b6156700004f/traffic-light-green.jpg";
}
function ChangeLights() {

  setTimeout(() => {ChangeRed()},250);
  setTimeout(() => {ChangeYellow()},2000);
  setTimeout(() => {ChangeGreen()},3000);
}

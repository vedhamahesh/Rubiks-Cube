var buttons = [
  "Right",
  "Right Prime",
  "Left",
  "Left Prime",
  "Up",
  "Up Prime",
  "Down",
  "Down Prime",
  "Front",
  "Front Prime",
  "Back",
  "Back Prime",
  "M Turn",
  "M Prime",
  "E Turn",
  "E Prime",
  "S Turn",
  "S Prime",
  "X Turn",
  "X Prime",
  "Y Turn",
  "Y Prime",
  "Z Turn",
  "Z Prime"
];
const turns = [
  "R",
  "RPrime",
  "L",
  "LPrime",
  "U",
  "UPrime",
  "D",
  "D Prime",
  "F",
  "FPrime",
  "B",
  "BPrime",
  "M",
  "MPrime",
  "E",
  "EPrime",
  "S",
  "SPrime",
  "X",
  "XPrime",
  "Y",
  "YPrime",
  "Z",
  "ZPrime"
];

buttons = buttons.map((b, i) =>
  $(`<div>${b}</div>`)
    .appendTo(`#buttons${i < buttons.length / 2 ? '1' : '2'}`));
buttons.forEach((b, i) =>
  b.click(() =>
    eval(`rubix.${turns[i]}()`)));

$("#scramble").click(() => rubix.scramble());
$("#solve").click(() => rubix.fullSolve());

$("#show-hide").click(function () {
  var el = $(this);
  if (el.text() == "Show Manual Buttons") {
    el.text("Hide Manual Buttons");
    $("#buttons1").fadeIn();
    $("#buttons2").fadeIn();
  } else {
    el.text("Show Manual Buttons");
    $("#buttons1").fadeOut();
    $("#buttons2").fadeOut();
  }
});

$('#speed').on('change', function () {
  rubix.turnSpeed = map(this.value, 0, 100, PI * 1 / 100, PI * 4 / 25);
});
function fullscreen() {
  var d = {};
  var speed = 300;
  d.width = "100vw";
  d.height = "100vh";
  d.top = "0";
  d.left = "0";
  d.position = "absolute";

  $(".fullscr").animate(d,speed);
}

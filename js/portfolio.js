var i = 0;
function read() {
  if (!i) {
    document
      .querySelectorAll(".more")
      .forEach((el) => (el.style.display = "list-item"));
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";
    i = 1;
  } else {
    document
      .querySelectorAll(".more")
      .forEach((el) => (el.style.display = "none"));
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Read More";
    i = 0;
  }
}

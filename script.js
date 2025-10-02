const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prev.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

update(); // initialize state

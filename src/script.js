const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function display(index) {
  slides.forEach((slide) => {
    slide.classList.add("invisible", "opacity-0", "pointer-events-none");
  });
  slides[index].classList.remove(
    "invisible",
    "opacity-0",
    "pointer-events-none"
  );
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

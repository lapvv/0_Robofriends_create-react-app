const slider_selector = document.querySelectorAll(".slider__selector");
const slider_item = document.querySelectorAll(".slider__item");

let index = 0;

const activeSlide = (n) => {
  for (slide of slider_item) {
    slide.classList.remove("active");
  }
  slider_item[n] = classList.add("active");
};
const activeLine = (n) => {
  for (slide of slider_selector) {
    slide.classList.remove("active");
  }
  slider_selector[n] = classList.add("active");
};

// const nextSlide = () => {
//   if (index == slides.length-1){
//     index=0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// };

slider_selector.forEach((item, indexLine) => {
  item.addEventListener("click", () => {
    index = indexLine;
    activeSlide(index);
    activeLine(index);
  });
});

// slider_item.addEventListener('click', nextSlide);

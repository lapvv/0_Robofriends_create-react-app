const slider_item = document.querySelectorAll(".slider__item");

let index = 0;

const activeSlide = (n) => {
  for (slide of slider_item) {
    slide.classList.remove("active");
  }
  slider_item[n] = classList.add("active");
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

slider_item.forEach((item, indexLine) => {
  item.addEventListener("click", () => {
    index = indexLine;
    activeSlide(index);
  });
});

// slider_item.addEventListener('click', nextSlide);

const slider_selectors = document.getElementsByClassName(".slider__selector");
const slider_items = document.getElementsByClassName(".slider_item");

// const prev = document.getElementById('btn-prev')
// const next = document.getElementById('btn-next')
// const slides = document.getElementsByClassName('.slide')
// const dots = document.getElementsByClassName('.dot')


console.log('slider_selectors :', slider_selectors);
console.log('slider_items :', slider_items);
let index = 0;

const activeSlide = n => {
  for (let slide of slider_items) {
    slide.classList.remove("active");
  }
  slider_items[n].classList.add("active");
};

// const activeDot = n => {
//   for (slide of dots) {
//     slide.classList.remove("active");
//   }
//   dots[n].classList.add("active");
// };

const nextSlide = () => {
  if (index == slider_items.length-1){
    index=0;
    activeSlide(index);
    // activeDot(index)
  } else {
    index++;
    activeSlide(index);
    // activeDot(index)
  }
};

const prevSlide = () => {
  if (index == 0){
    index=slider_items.length-1;
    activeSlide(index);
    // activeDot(index)
  } else {
    index--;
    activeSlide(index);
    // activeDot(index)
  }
};

for (let selector of slider_selectors) {
  selector.addEventListener('click', nextSlide)
}

// slider_selectors.addEventListener('click', nextSlide)
// prev.addEventListener('click', prevSlide)

// dots.forEach((item, indexDot) => {
//   item.addEventListener("click", () => {
//     index = indexDot;
//     activeSlide(index);
//     activeDot(index)
//   });
// });

// slider_item.addEventListener('click', nextSlide);







// let index = 0;
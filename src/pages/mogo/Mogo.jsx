import React from 'react';
import clsx from "clsx";
import cs from "./Mogo.module.scss";
// import "./Mogo.js";

const Mogo = () => {

    const slider_selector = document.querySelectorAll(".slider__selector");
    const slider_item = document.querySelectorAll(".slider_item");
    console.log(slider_selector);
    console.log(slider_item);
    
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
    
    slider_selector.forEach((item, indexLine) => {
      item.addEventListener("click", () => {
        console.log('click');
        index = indexLine;
        activeSlide(index);
        activeLine(index);
      });
    });

    return (
        <div className={cs.Mogo}>
            <header className={cs.header}>
                <div className={cs.container}>
                    <div className={cs.header__inner}>
                        <div className={cs.header__logo}>MoGo</div>
                        <nav className={cs.nav}>
                            <a className={clsx(cs.nav__link, cs.active)} href="#">About</a>
                            <a className={cs.nav__link} href="#">Service</a>
                            <a className={cs.nav__link} href="#">Blog</a>
                            <a className={cs.nav__link} href="#">Work</a>
                            <a className={cs.nav__link} href="#">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>

            <div className={cs.intro}>
                <div className={cs.container}>
                    <div className={clsx(cs.intro__inner, cs.slider_item, cs.active)}>
                        <h2 className={cs.intro__suptitle}>Creative Template</h2>
                        <h1 className={cs.intro__title}>Welcome to MoGo</h1>
                        <a className={cs.btn} href="#">Learn More</a>
                    </div>
                    <div className={clsx(cs.intro__inner, cs.slider_item)}>
                        <h2 className={cs.intro__suptitle}>Just to check</h2>
                        <h1 className={cs.intro__title}>Slider functioning</h1>
                        {/* <a className={cs.btn} href="#">Learn More</a> */}
                    </div>
                </div>
                <div className={cs.slider}>
                    <div className={cs.container}>
                        <div className={cs.slider__inner}>
                            <div className={clsx(cs.slider__selector, cs.active)}>
                                <span className={cs.slider__num}>01</span>
                                Intro
                            </div>
                            <div className={cs.slider__selector}>
                                <span className={cs.slider__num}>02</span>
                                Work
                            </div>
                            <div className={cs.slider__selector}>
                                <span className={cs.slider__num}>03</span>
                                About
                            </div>
                            <div className={cs.slider__selector}>
                                <span className={cs.slider__num}>04</span>
                                Contacts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mogo;
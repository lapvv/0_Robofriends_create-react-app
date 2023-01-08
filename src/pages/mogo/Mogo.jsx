import React, { useState } from 'react';
import clsx from "clsx";
import cs from "./Mogo.module.scss";

const Mogo = () => {

  const [slider1, setSlider1] = useState(true);
  const [slider2, setSlider2] = useState(false);
  const [slider3, setSlider3] = useState(false);
  const [slider4, setSlider4] = useState(false);

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
              {/* <a className={cs.nav__link} href="#">Work</a> */}
              {/* <a className={cs.nav__link} href="#">Contact</a> */}
            </nav>
          </div>
        </div>
      </header>
      <div className={cs.intro}>
        <div className={cs.container}>
          {/* INTRO SECTION */}
          {slider1 &&
            <div className={clsx(cs.intro__inner, cs.active)}>
              <h2 className={cs.intro__suptitle}>Creative Template</h2>
              <h1 className={cs.intro__title}>Welcome to MoGo</h1>
              <a className={cs.btn} href="#">Learn More</a>
            </div>}
          {/* WORK SECTION */}
          {slider2 &&
          <div>
            <div className={clsx(cs.intro__inner, cs.work__text, cs.mb_10)}>THIS IS THE WORK SECTION PROVIDED BY TEMPLATE. HERE YOU CAN PUT YOUR TEXT.</div>
            <div className={clsx(cs.intro__inner, cs.work__text)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi repellendus quia sapiente. Sapiente, eaque exercitationem odio quo, officia sequi laboriosam culpa asperiores, neque facilis aliquam dolor obcaecati quisquam assumenda.</div>
          </div>}
          {slider3 &&
            <div>
            <div className={clsx(cs.intro__inner, cs.work__text, cs.mb_10)}>THIS IS THE GALLERY SECTION PROVIDED BY TEMPLATE. HERE YOU CAN PUT YOUR PICTURES.</div>
            <div className={clsx(cs.intro__inner, cs.work__text)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi repellendus quia sapiente. Sapiente, eaque exercitationem odio quo, officia sequi laboriosam culpa asperiores, neque facilis aliquam dolor obcaecati quisquam assumenda.</div>
          </div>}
          {slider4 &&
            <div>
            <div className={clsx(cs.intro__inner, cs.work__text, cs.mb_10)}>THIS IS THE CONTACTS SECTION PROVIDED BY TEMPLATE. HERE YOU CAN PUT YOUR CONTACTS.</div>
            <div className={clsx(cs.intro__inner, cs.work__text)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi repellendus quia sapiente. Sapiente, eaque exercitationem odio quo, officia sequi laboriosam culpa asperiores, neque facilis aliquam dolor obcaecati quisquam assumenda.</div>
          </div>}
          <div className={cs.slider}>
            <div className={cs.container}>
              <div className={cs.slider__inner}>
                <button className={clsx(cs.slider__selector, slider1 ? cs.active : null)} onClick={() => { setSlider1(true); setSlider2(false); setSlider3(false); setSlider4(false) }}>
                  <span className={cs.slider_num}>01</span>
                  Intro
                </button>
                <button className={clsx(cs.slider__selector, slider2 ? cs.active : null)} onClick={() => { setSlider1(false); setSlider2(true); setSlider3(false); setSlider4(false) }}>
                  <span className={cs.slider_num}>02</span>
                  Work
                </button>
                <button className={clsx(cs.slider__selector, slider3 ? cs.active : null)} onClick={() => { setSlider1(false); setSlider2(false); setSlider3(true); setSlider4(false) }}>
                  <span className={cs.slider_num}>03</span>
                  Gallery
                </button>
                <button className={clsx(cs.slider__selector, slider4 ? cs.active : null)} onClick={() => { setSlider1(false); setSlider2(false); setSlider3(false); setSlider4(true) }}>
                  <span className={cs.slider_num}>04</span>
                  Contacts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mogo;
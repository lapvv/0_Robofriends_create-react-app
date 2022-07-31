import React from 'react';
import clsx from "clsx";
import cs from "./Mogo.module.scss";

const Mogo = () => {
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
                    <div className={cs.intro__inner}>
                        <h2 className={cs.intro__suptitle}>Creative Template</h2>
                        <h1 className={cs.intro__title}>Welcome to MoGo</h1>
                        <a className={cs.btn} href="#">Learn More</a>
                    </div>
                </div>
                <div className={cs.slider}>
                    <div className={cs.container}>
                        <div className={cs.slider__inner}>
                            <div className={clsx(cs.slider__item, cs.active)}>
                                <span className={cs.slider__num}>01</span>
                                Intro
                            </div>
                            <div className={cs.slider__item}>
                                <span className={cs.slider__num}>02</span>
                                Work
                            </div>
                            <div className={cs.slider__item}>
                                <span className={cs.slider__num}>03</span>
                                About
                            </div>
                            <div className={cs.slider__item}>
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
import React from 'react';
import "./Mogo.module.scss";

const Mogo = () => {
    return (
        <div className="Mogo">
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">MoGo</div>

                        <nav className="nav">
                            <a className="nav__link active" href="#">About</a>
                            <a className="nav__link" href="#">Service</a>
                            <a className="nav__link" href="#">Blog</a>
                            <a className="nav__link" href="#">Work</a>
                            <a className="nav__link" href="#">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>


            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <h2 className="intro__suptitle">Creative Template</h2>
                        <h1 className="intro__title">Welcome to MoGo</h1>

                        <a className="btn" href="#">Learn More</a>
                    </div>
                </div>

                <div className="slider">
                    <div className="container">
                        <div className="slider__inner">
                            <div className="slider__item active">
                                <span className="slider__num">01</span>
                                Intro
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">02</span>
                                Work
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">03</span>
                                About
                            </div>
                            <div className="slider__item">
                                <span className="slider__num">04</span>
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
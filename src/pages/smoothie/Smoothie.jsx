import React from 'react';
import clsx from 'clsx';
import "https://kit.fontawesome.com/53d01580cf.js";
import "../../utils/wow";
import "../../utils/animate.min.css";
import cs from "./Smoothie.module.scss";
import logo from "./img/logo.png";
import Group1 from "./img/Group_1.png";
import cherry from "./svg/cherry.svg";
import apple from "./svg/apple.svg";
import pineapple from "./svg/pineapple.svg";
import banana from "./svg/banana.svg";
import photo1 from "./img/foto1.jpg";
import photo2 from "./img/foto2.jpg";
import photo3 from "./img/foto3.jpg";
import photo4 from "./img/foto4.jpg";
import fb from "./svg/fb.svg";
import yt from "./svg/yt.svg";
import inst from "./svg/inst.svg";
import tweet from "./svg/tweet.svg";
import fb2 from "./svg/facebook-svgrepo-com (1).svg";
import yt2 from "./svg/youtube-logo-thin-svgrepo-com.svg";
import inst2 from "./svg/instagram-svgrepo-com.svg";
import tweet2 from "./svg/twitter-svgrepo-com.svg";
import call from "./svg/phone-svgrepo-com.svg";
import mail from "./svg/forward-svgrepo-com.svg";
import geo from "./svg/location-pin-svgrepo-com (1).svg";
import feed1 from "./img/feed1.png";
import feed2 from "./img/feed2.png";
import feed3 from "./img/feed3.png";
import feed4 from "./img/feed4.png";
import feed5 from "./img/feed5.png";
import feed6 from "./img/feed6.png";

const Smoothie = () => {
    return (
        <div className={cs.Smoothie}>
            <header className={cs.top_header}>
                <div className={clsx(cs.container, cs.nav)}>
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="" className={cs.active}>About</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </nav>
                    <img src={logo} alt="logo_img" srcSet="img/logo_ret.png 2x" />
                    <nav>
                        <ul>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className={clsx(cs.cover, cs.mainpage, cs.tears)}>
                <h2>About</h2>
                <h4>Some facts about our activity</h4>
            </section>
            <main>
                <div className={cs.container}>
                    <div className={cs.column}>
                        <article>
                            <h3>Triple Berry Smoothie</h3>
                            <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                        </article>
                        <article>
                            <h3>Pick your fruit</h3>
                            <p>We chose strawberries, blackberries, raspberries, and bananas to be our base, but any combo of fruit is great.</p>
                        </article>
                        <article>
                            <h3>Fresh or frozen fruit?</h3>
                            <p>For smoothies, frozen fruit is best. It blends up thicker than fresh and gives you a really cold smoothie to enjoy when done.</p>
                        </article>
                    </div>
                    <div className={cs.column_middle}>
                        <img src={Group1} alt="smoothie pic" />
                    </div>
                    <div className={cs.column}>
                        <article>
                            <h3>Add a thickener.</h3>
                            <p>We use unsweetened greek yogurt in our smoothie, but peanut butter, almond butter, or vanilla yogurt are all great options.</p>
                        </article>
                        <article>
                            <h3>Choose a liquid</h3>
                            <p>Almond milk is great for the added nutty flavor, but coconut milk pairs well with a tropical smoothie.</p>
                        </article>
                        <article>
                            <h3>Throw some add-ins in</h3>
                            <p>Add some spinach or kale for additional nutrition or flax seeds for omega-3s. Flavors like fresh mint, vanilla extract, cinnamon, or honey</p>
                        </article>
                    </div>
                </div>
            </main>
            <section>
                <div className={cs.container}>
                    <div className={clsx(cs.block_icons, cs.tears)}>
                        <div className={cs.items_icon}>
                            <div className={clsx(cs.icon, cs.animated, cs.wow, cs.fadeInRight)}>
                                <img className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)} src={cherry} alt="cherry" />
                            </div>
                            <span className={clsx(cs.counter, cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>4832</span>
                            <h5 className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>Cherry smoothies</h5>
                        </div>
                        <div className={cs.items_icon}>
                            <div className={cs.icon}>
                                <img className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)} src={apple} alt="apple" />
                            </div>
                            <span className={clsx(cs.counter, cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>2531</span>
                            <h5 className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>Apple smoothies</h5>
                        </div>
                        <div className={cs.items_icon}>
                            <div className={cs.icon}>
                                <img className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)} src={pineapple} alt="pineapple" />
                            </div>
                            <span className={`${cs.counter} ${cs.animate__animated} ${cs.wow} ${cs.animate__fadeInRight}`}>1939</span>
                            <h5 className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>Ananas smoothies</h5>
                        </div>
                        <div className={cs.items_icon}>
                            <div className={cs.icon}>
                                <img className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)} src={banana} alt="banana" />
                            </div>
                            <span className={clsx(cs.counter, cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>7812</span>
                            <h5 className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>Bananas smoothies</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={cs.container}>
                <h2 className={cs.team_f1}>Dream Team</h2>
                <h4 className={cs.team_f2}>Meet our members</h4>
                        <div className={cs.team}>
                            <div className={cs.team_member}>
                                <div className={cs.photo}>
                                    <img src={photo1} alt="photo1" />
                                </div>
                                <div className={cs.box}>
                                    <span><h2 className={cs.FIO}>Ava Addams</h2></span>
                                    <span><h5 className={cs.occup}>Designer</h5></span>
                                    <p className={cs.team_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ante, cons non profit here.</p>
                                    <span>
                                        <a href="#"><img src={fb} alt="fb" /></a>
                                        <a href="#"><img src={yt} alt="yt" /></a>
                                        <a href="#"><img src={inst} alt="inst" /></a>
                                        <a href="#"><img src={tweet} alt="tweet" /></a>
                                    </span>
                                </div>
                            </div>
                            <div className={cs.team_member}>
                                <div className={cs.photo}>
                                    <img src={photo2} alt="photo2" />
                                </div>
                                <div className={cs.box}>
                                    <span><h2 className={cs.FIO}>Ellen Marlen</h2></span>
                                    <span><h5 className={cs.occup}>Designer</h5></span>
                                    <p className={cs.team_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ante, cons non profit here.</p>
                                    <span>
                                        <a href="#"><img src={fb} alt="fb" /></a>
                                        <a href="#"><img src={yt} alt="yt" /></a>
                                        <a href="#"><img src={inst} alt="inst" /></a>
                                        <a href="#"><img src={tweet} alt="tweet" /></a>
                                    </span>
                                </div>
                            </div>
                            <div className={cs.team_member}>
                                <div className={cs.photo}>
                                    <img src={photo3} alt="photo3" />
                                </div>
                                <div className={cs.box}>
                                    <span><h2 className={cs.FIO}>Rebecca Le</h2></span>
                                    <span><h5 className={cs.occup}>Designer</h5></span>
                                    <p className={cs.team_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ante, cons non profit here.</p>
                                    <span>
                                        <a href="#"><img src={fb} alt="fb" /></a>
                                        <a href="#"><img src={yt} alt="yt" /></a>
                                        <a href="#"><img src={inst} alt="inst" /></a>
                                        <a href="#"><img src={tweet} alt="tweet" /></a>
                                    </span>
                                </div>
                            </div>
                            <div className={cs.team_member}>
                                <div className={cs.photo}>
                                    <img src={photo4} alt="photo4" />
                                </div>
                                <div className={cs.box}>
                                    <span><h2 className={cs.FIO}>Andy Shped</h2></span>
                                    <span><h5 className={cs.occup}>Drinker</h5></span>
                                    <p className={cs.team_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dui ante, cons non profit here.</p>
                                    <span>
                                        <a href="#"><img src={fb} alt="fb" /></a>
                                        <a href="#"><img src={yt} alt="yt" /></a>
                                        <a href="#"><img src={inst} alt="inst" /></a>
                                        <a href="#"><img src={tweet} alt="tweet" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section className={cs.contacts}>
                <div className={clsx(cs.container, cs.flex_cont)}>
                    <div className={clsx(cs.animate__animated, cs.wow, cs.animate__fadeInRight)}>
                        <div><h2 className={clsx(cs.FIO, cs.margin)}>Opening Hours</h2></div>
                        <span className={cs.day}>Monday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Tuesday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Wednesday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Thursday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Friday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Saturday / </span><span className={cs.hours}>9:00 - 20:00</span>
                        <br />
                        <span className={cs.day}>Sunday / </span><span className={cs.hours}>CLOSED</span>
                    </div>
                    <div className={clsx(cs.contacts_inner)}>
                        <div><h2 className={clsx(cs.FIO, cs.margin)}>Contact Info</h2></div>
                        <div className={cs.icons}>
                            <div><img className={cs.icons2} src={call} alt="call" /><span className={cs.margin2}><a className={cs.phone} href="tel:+38899432032">+38 899 4320 32</a></span></div>
                            <div><img className={cs.icons2} src={mail} alt="mail" /><span className={cs.margin2}><a className={cs.mail} href="mailto:hai@aletheme.com">hai@aletheme.com</a></span></div>
                            <div><img className={cs.icons2} src={geo} alt="geo" /><span className={cs.margin2}> France, Paris, Lille de la Cite 1p</span></div>
                        </div>
                    </div>
                    <div className={cs.instFeed}>
                        <div><h2 className={clsx(cs.FIO, cs.margin)}>Instagram feed</h2></div>
                        <div className={cs.feed}>
                            <div className={cs.feedItem}><img src={feed1} alt="feed1" /></div>
                            <div className={cs.feedItem}><img src={feed2} alt="feed2" /></div>
                            <div className={cs.feedItem}><img src={feed3} alt="feed3" /></div>
                            <div className={cs.feedItem}><img src={feed4} alt="feed4" /></div>
                            <div className={cs.feedItem}><img src={feed5} alt="feed5" /></div>
                            <div className={cs.feedItem}><img src={feed6} alt="feed6" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={cs.footer}>
                <div className={clsx(cs.container, cs.footerText, cs.flex_cont)}>
                    <span>Copyrights 2020. Theme for WordPress</span>
                    <span className={cs.icons3}>
                    <img className={cs.icons2} src={fb2} alt="fb2" />
                    <img className={cs.icons2} src={yt2} alt="yt2" />
                    <img className={cs.icons2} src={inst2} alt="inst2" />
                    <img className={cs.icons2} src={tweet2} alt="tweet2" />
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Smoothie;
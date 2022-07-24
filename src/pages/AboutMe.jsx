import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            {/* <header>
                <div className="container">
                    <div className='header_nav_line'>
                            <a className="nav-link" href="#">About me</a>
                            <a className="nav-link" href="#">Projects</a>
                    </div>
                </div>
            </header> */}
            <div className="container2">
                <div className="box1">
                    <h2>HTML developer</h2>
                    <h1>Vasilii Laptev</h1>
                    Hello, my guest! Let me introduce myself first. I am Frontend Developer, experienced in development of webpages, using React, Redux, Vue and all other libraries and frameworks which I need to solve the task. I also work as a QA Tester Automation Engineer,  maintaining over 1800 test cases and increasing test coverage and expanding new features coverage.
                </div>
                <div className="box2">
                    <img className="avatar" src="img/avatar.jpg" alt="avatar" />
                </div>
                <div className="box3">
                    <h3>Experience</h3>
                    <h1>1 year</h1>
                    <h3>Stack of technologies</h3>
                    <h1>9</h1>
                    <h3>Frontend projects</h3>
                    <h1>6</h1>
                    <h3>Number of test cases</h3>
                    <h1>1800+</h1>
                </div>
            </div>
            <div className="container">
                <h1 className='stack'>STACK OF TECHNOLOGIES:</h1>
                <div className='main_block wrap'>
                    <div className='item'><img src="svg/html-svgrepo-com.svg" alt="html logo"/></div>
                    <div className='item'><img src="svg/css3-svgrepo-com.svg" alt="css logo"/></div>
                    <div className="item"><img src="svg/js-official-svgrepo-com.svg" alt="javascript icon"/></div>
                    <div className="item"><img src="svg/bootstrap-svgrepo-com.svg" alt="vue logo"/></div> 
                    <div className="item"><img src="svg/java-svgrepo-com.svg" alt="vue logo"/></div>
                    <div className="item"><img src="svg/react-svgrepo-com.svg" alt="vue logo"/></div>
                    <div className="item"><img src="svg/vue-svgrepo-com.svg" alt="vue logo"/></div>
                    <div className="item"><img src="svg/gulp-svgrepo-com.svg" alt="vue logo"/></div>
                    <div className="item"><img src="svg/sass-svgrepo-com.svg" alt="vue logo"/></div>
                </div>
            </div>
            <footer>
                <div className="footer_div wrap" style={{alignSelf: 'center'}}>
                    <div className="footer_item">
                        <img className="footer_img" src="svg/footer/telegram-svgrepo-com (1).svg" alt="telegram_icon"/>
                        <a className="contacts" href="https://t-do.ru/resolve?domain=Basil4368">Telegram</a>
                    </div>
                    <div className="footer_item">
                        <img className="footer_img" src="svg/footer/email-svgrepo-com (1).svg" alt="email_icon"/>
                        <a className="contacts" href="mailto:lapvv@yandex.ru">Email me</a>
                    </div>
                    <div className="footer_item">
                        <img className="footer_img" src="svg/footer/telephone-call-svgrepo-com (1).svg" alt="phone_icon"/>
                        <a className="contacts" href="tel:+79042467223">+7904-246-7223</a>
                    </div>
                    <div className="footer_item">
                        <img className="footer_img" src="svg/footer/whatsapp-symbol-logo-svgrepo-com.svg" alt="whatsapp_icon" width="50" height="50"/>
                        <a className="contacts" href="whatsapp://send?phone=+79042467223">Whatsapp</a>
                    </div>
                </div>       
            </footer>
            <img src="img/Vector%201.svg" alt="" className="v1"/>
            <img src="img/Vector%202.svg" alt="" className="v2"/>
        </div>
    );
};

export default AboutMe;

// src/Header.js
import React from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Логотип" className="logo-image" />
            </div>
            <nav className="nav">
                <a href="#about" className="nav-link">О нас</a>
                <a href="#services" className="nav-link">Услуги</a>
                <a href="#rent" className="nav-link">Аренда</a>
            </nav>
            <button className="contact-button" onClick={() => alert("С нами пока нельзя связаться")}>Связаться</button>
        </header>
    );
};

export default Header;

// function Header() {
//     return (
//         <header className="header">
//             <h1>Мой Заголовок</h1>
//             <nav>
//                 <div style={{display: "inline-flex"}}></div>
//                 <ul className="nav-list">
//                     <li><a href="/">Главная</a></li>
//                     <li><a href="/about">О нас</a></li>
//                     <li><a href="/contact">Контакты</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };
//
// export default Header;


// const Header = () => {
//     return (
//         <header id="header">
//             <div className="logo">Логотип</div>
//             <nav className="nav">
//                 <ul>
//                     <li><a href="#option1">Опция 1</a></li>
//                     <li><a href="#option2">Опция 2</a></li>
//                     <li><a href="#option3">Опция 3</a></li>
//                 </ul>
//             </nav>
//             <button className="header-button">Кнопка</button>
//         </header>
//     );
// };
//
// export default Header;



// const Header = () => {
//     return (
//         <header id="header">
//             <div className="logo">
//                 <a><img src="/logo.png" alt="" /></a>
//             </div>
//                 <ul>
//                     <li><a href="#about">О нас</a></li>
//                     <li><a href="#service">Услуги</a></li>
//                     <li><a href="#rent">Аренда</a></li>
//                 </ul>
//             <div className="button">
//                 <button>Связаться</button>
//             </div>
//         </header>
//     );
// };
//
// export default Header;


import React from 'react';
import './Header.module.css'; // Импортируем стили


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



const Header = () => {
    return (
        <header id="header">
            <div className="logo">
                <a><img src="/logo.png" alt="" /></a>
            </div>
                <ul>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#service">Услуги</a></li>
                    <li><a href="#rent">Аренда</a></li>
                </ul>
            <div className="button">
                <button>Связаться</button>
            </div>
        </header>
    );
};

export default Header;


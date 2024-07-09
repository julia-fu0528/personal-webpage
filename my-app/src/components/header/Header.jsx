import React, {useState} from 'react';
import "./header.css";

const Header = () => {
        /* ========== Toggle Menu ========== */
        const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
                <nav className="nav container">
                    {/* <a href="index.html" className="nav__logo"> Wanjia Fu </a> */}

                    <div className={Toggle ? "nav__menu show-menu" : 
                    "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#about" className="nav__link active-link">
                                    <i className="uil uil-user nav__icon"></i> ABOUT
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#research" className="nav__link">
                                    <i className="uil uil-research nav__icon"></i> RESEARCH
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#experience" className="nav__link">
                                    <i className="uil uil-experience nav__icon"></i> EXPERIENCE
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <i className="uil uil-projects nav__icon"></i> PROJECTS
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" className="nav__link">
                                    <i className="uil uil-education nav__icon"></i> EDUCATION
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#awards" className="nav__link">
                                    <i className="uil uil-awards nav__icon"></i> AWARDS
                                </a>
                            </li>
                         </ul>

                        <i class="uil uil-times nav__close" onClick={() => showMenu 
                        (!Toggle)}></i>
                    </div>

                    <div className="nav__toggle" onClick={() => showMenu 
                        (!Toggle)}>
                        <i class="uil uil-apps"></i>
                    </div>
                </nav>
        </header>
    )
}

export default Header
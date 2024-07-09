import React from 'react';

const ScrollDown = () => {
    return (
        <div className="about__scroll">
            <a href="#about" className="about__scroll-button button--flex">
                <svg
                    width="32px"
                    height="64px"
                    className="about__scroll-mouse"
                    viewBox="0 20 60 80"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                    }}
                >
                    <path class="mouse"
                        d="M16,1 C24.284,1 31,7.716 31,16 L31,48 C31,56.284 24.284,63 16,63 C7.716,63 1,56.284 1,48 L1,16 C1,7.716 7.716,1 16,1 Z"
                        style={{
                            fill: "none",
                            stroke: "var(--title-color)",
                            strokeWidth: "2",
                        }}
                    ></path>
                    <path class="wheel"
                        d="M16,8 L16,20"
                        style={{
                            fill: "none",
                            stroke: "var(--title-color)",
                            strokeWidth: "2",
                        }}
                    ></path>
                </svg>
                <span className="about__scroll-name">Scroll down</span>
                <i class="uil uil-arrow-down about__scroll-arrow"></i>
            </a>
        </div>
    );
}

export default ScrollDown;

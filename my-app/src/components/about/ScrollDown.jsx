import React from 'react'

const ScrollDown = () => {
    return (
        <div className="about__scroll">
            <a href="#about" className="about__scroll-button 
            button--flex">
                <svg
                    width="32px"
                    height="32px"
                    class="about__scroll-mouse"
                    viewBox="0 0 247 390"
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
                    <path
                        class="wheel"
                        d="M123.359,79.77510,72.843"
                        stype={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: "20px",
                        }}
                    ></path>
                    <path
                        id="mouse"
                        d="M236.717,123.359C0,-62.565 -50.794,-113.359 -113.
                        358,-113.359C-62.565,0 -113.359,50.794 -113.359,113.
                        35910,143.237c0,62.565 50.794,113.359 113.359,113.
                        359c62.564,0 113.358,-50.794 113.358,-113.35910,-143.
                        237Z"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: "20px",
                        }}
                    ></path>
                </svg>
            </a>
        </div>
    )
}

export default ScrollDown
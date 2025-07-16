import React from 'react'
import HandsImg from "../../assets/gigahands.gif";
import UniTacImg from "../../assets/UniTac.gif";

const Info = () => {
    return (
        <div className="research__info grid">
            <div className="research__box">
                <div className="research__teaser">
                    <img src={UniTacImg} alt="" className="research__img" />
                </div>
                <div className="research__paragraph">
                    <div className="research__topic">
                        <a className="research__title" href="https://ivl.cs.brown.edu/research/unitac"> UniTac: Whole-Robot Touch Sensing Without Tactile Sensors</a>
                        {/* <div className="research__social">
                            <a href="https://arxiv.org/abs/2507.07980" 
                            className="research__social-icon" rel="noreferrer" target="_blank">
                            <i class="uil uil-file-alt"></i>
                            </a>
                        </div> */}
                    </div>
                    <div>
                        <span className="research__subheading">
                            <strong>Wanjia Fu*</strong>,
                            <a href="https://lhy.xyz/"> Hongyu Li*</a>,
                            <a href="https://ivyyyy24381.github.io/home"> Ivy X. He</a>,
                            <a href="https://cs.brown.edu/people/stellex/"> Stefanie Tellex</a>,
                            <a href="https://cs.brown.edu/people/ssrinath/"> Srinath Sridhar</a>
                        </span>
                    </div>
                    <div className="research__subtitle">
                        <p><i>Preprint</i></p>
                        <p>Presented at RSS 2025 <a href="https://hrcm-workshop.github.io/2025/">HRCM workshop</a></p>
                    </div>
                    
                    <div className="research__description">
                        <p>
                            We present a data-driven model, UniTac, that leverages built-in joint torque sensors to achieve live whole-body touch sensing across various robot platforms, 
                            eliminating the need for dedicated tactile sensors. 
                        </p>
                    </div>
                    <div className="research__links">
                        <a href="https://arxiv.org/abs/2507.07980"class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noreferrer">arXiv</a>
                        <a href="https://ivl.cs.brown.edu/research/unitac"class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noreferrer">HTML</a>
                    </div>

                </div>
            </div> 
            <div className="research__box">
                <div className="research__teaser">
                    <img src={HandsImg} alt="" className="research__img" />
                </div>
                <div className="research__paragraph">
                    <div className="research__topic">
                        <a className="research__title" href="https://ivl.cs.brown.edu/research/gigahands.html"> GigaHands: A Massive Annotated Dataset of Bimanual Hand Activities </a>
                        {/* <div className="research__social">
                            <a href="https://www.arxiv.org/pdf/2412.04244" 
                            className="research__social-icon" rel="noreferrer" target="_blank">
                            <i class="uil uil-file-alt"></i>
                            </a>
                        </div> */}
                    </div>
                    <div>
                        <span className="research__subheading">
                            <a href="https://freddierao.github.io/">Rao Fu*</a>,
                            <a href="https://kristen-z.github.io/"> Dingxi Zhang*</a>
                            <a href="https://www.alex-jiang.com/about/"> Alex Jiang</a>,
                            <strong> Wanjia Fu</strong>,
                            <a href="https://austin-funk.github.io/"> Austin Funk</a>,
                            <a href="https://dritchie.github.io/"> Daniel Ritchie</a>,
                            <a href="https://cs.brown.edu/people/ssrinath/"> Srinath Sridhar</a>
                        </span>
                    </div>
                    <p className="research__subtitle"><i>CVPR, 2025 (Highlight)</i></p>
                    <div className="research__description">
                        <p>
                            We introduce GigaHands, a massive annotated dataset capturing 34 hours of bimanual hand activities from 56 subjects and 417 objects, 
                            totaling 14k motion clips derived from 183 million frames paired with 84k text annotations. 
                        </p>
                    </div>
                    <div className="research__links">
                        <a href="https://www.arxiv.org/abs/2412.04244"class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noreferrer">arXiv</a>
                        <a href="https://ivl.cs.brown.edu/research/gigahands.html"class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noreferrer">HTML</a>
                        <a href="https://github.com/Kristen-Z/GigaHands"class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noreferrer">Dataset</a>
                    </div>
                </div>
            </div> 
            
        </div>
    )
}

export default Info
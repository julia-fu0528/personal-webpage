import React from 'react'
import ResearchImg from "../../assets/research.png";
import IRLImg from "../../assets/irl.jpg";

const Info = () => {
    return (
        <div className="research__info grid">
            <div className="research__box">
                <div className="research__topic">
                    <h3 className="research__title">Vibration Haptics: Hand contact detection and localization with IMU data</h3>
                    <span className="research__date">2024-Present</span>
                </div>
                <a className="research__subtitle" href="https://ivl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="research__subheading">Advisors: Srinath Sridhar, Krishna Murthy Jatavallabhula</span>
                </div>
                <div className="research__description">
                    <li>
                        Training a model to detect hand-object contact and to localize the contact onto fingers with acceleration and gyroscope data from IMU sensors. 
                    </li>
                    <li>
                        Developed and 3D printed brace watch-like model to incorporate IMU and collect data.
                    </li>
                    <li>
                        Collected data using Brown Interactive Camera System (BRICS) and labeled data by incorporating the MANO fitting pipeline. 
                    </li>
                </div>
                <img src={ResearchImg} alt="" className="research__img" />
            </div>
            <div className="research__box">
                <div className="research__topic">
                    <h3 className="research__title">Shaped-Based Skill Transfer by Learning Policy on Object Parts</h3>
                    <span className="research__date" id="irl">2023-2024</span>
                </div>
                <a className="research__subtitle" href="http://irl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Intelligent Robotics Lab</a>
                <div>
                    <span className="research__subheading">Advisor: George Konidaris</span>
                </div>
                <div className="research__description">
                    <li>
                        Incorporated Segment-Anything model to segment images of mugs into cup and handle and back projected the segmentation into point clouds. 
                    </li>
                    <li>
                        Learned latent space representations of the shape of object parts
                    </li>
                    <li>
                        Developed a policy with lower costs than when learning on the whole object instead of object parts
                    </li>
                </div>
                <img src={IRLImg} alt="" className="research__img" />
            </div>
        </div>
    )
}

export default Info
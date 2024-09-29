import React from 'react';
import TutorialImg from "../../assets/tutorial.png";

const Content = () => {
    return (
        <div className="experience__info grid">
            <div className="experience__box">
                <div className="experience__topic">
                    <h3 className="experience__title"> Intelligent Customer Service Product Operation Engineer Intern</h3>
                    <span className="experience__date">May - June 2023</span>
                </div>
                <a className="experience__subtitle" href="https://www.hydsoft.com/en/"
                target="_blank" rel="noreferrer">Hydsoft Technology Co., Ltd.</a>
                <div>
                    <span className="experience__subheading">Software Technology Outsourcing Services Company</span>
                </div>
                <div className="experience__description">
                    <li>Designed AI customer service to improve plane ticket booking system based on Baidu UNIT and natural language processing                    </li>
                    <li>Received the PaddlePaddle AI Technical Engineer Certificate</li>
                    <li>Received the Certificate of Achievement as Intelligent Customer Service Product Operation Engineer by Baidu AI Cloud</li>
                    <li>Designed front-end poster layout and user interface in a 10-member team for China Mobile Smart Card Production Platform                    </li>
                </div>
            </div>
            <div className="experience__box">
                <div className="experience__topic">
                    <h3 className="experience__title"> Software Engineering Intern at Brown Visual Computing</h3>
                    <div className="experience__social">
                        <a href="https://github.com/julia-fu0528/demo" 
                        className="experience__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                    <span className="experience__date">June 2023 - August 2023</span>
                </div>
                <a className="experience__subtitle has__link" href="https://browncsci1430.github.io/resources/cameras_vision_vs_graphics_demo/"
                target="_blank" rel="noreferrer">Pinhole Camera Models in Computer Vision vs. Computer Graphics</a>
                <div>
                    <span className="experience__subheading">Javascript, Three.js, HTML</span>
                </div>
                <div className="experience__description">
                    <li>
                    Employed front-end and back-end development with Three.js, Javascript, HTML, and CSS to create an online website tutorial 
                    on camera projection and perspective projection for the class Computer Vision for Dr. James Tompkin
                    </li>
                    <li>
                    Improved upon two existing online tutorials on affine transformations and the fundamental matrix for course development
                    </li>
                    <img src={TutorialImg} alt="" className="experience__img" />
                </div>
            </div>
            <div className="experience__box">
                <div className="experience__topic">
                    <h3 className="experience__title">Undergraduate Teaching Assistant</h3>
                    <span className="experience__date" id="uta">Jan - May 2024</span>
                </div>
                <a className="experience__subtitle" href="https://browncsci1430.github.io/index.html" 
                    target="_blank" rel="noreferrer">Brown University CSCI 1430: Computer Vision</a>
                <div className="experience__description">
                    <li>Work as one of the 24 undergraduate teaching assistants for the class CSCI 1430 Computer Vision</li>
                    <li>Engaged in course development, improved its webpage, Github repository, Gradescope autograders, and assignment code 
                    management</li>
                    <li>Graded and attended TA Hours and ED Hours for projects on image filtering, feature matching, camera geometry, scene 
                    classification, convolutional neural network, and a computer vision final project</li>
                </div>
            </div>
            <div className="experience__box">
                <div className="experience__topic">
                    <h3 className="experience__title">Head Teaching Assistant</h3>
                    <span className="experience__date" id="uta">Sep - Dec 2024</span>
                </div>
                <a className="experience__subtitle" href="https://browncsci1430.github.io/index.html" 
                    target="_blank" rel="noreferrer">Brown University CSCI 1430: Computer Vision</a>
                <div className="experience__description">
                    <li>Work as one of the two head teaching assistants for the class CSCI 1430 Computer Vision</li>
                    <li>In addition to usual teaching assistant work, organize fellow ten undergraduate teaching assistants, directly help manage and 
                    develop the course with professor Dr. Srinath Sridhar, and host weekly grading/staff meetings</li>
                </div>
            </div>
        </div>
    )
}

export default Content;
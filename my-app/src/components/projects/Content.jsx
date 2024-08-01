import React from 'react';
import TutorialImg from "../../assets/tutorial.png";
import RlImg from "../../assets/rl.png";

const Content = () => {
    return (
        <div className="projects__info grid">
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title"> COMPUTER VISION COURSE DEVELOPMENT</h3>
                    <div className="projects__social">
                        <a href="https://github.com/julia-fu0528/demo" 
                        className="projects__social-icon" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                    <span className="projects__date">June 2023 - August 2023</span>
                </div>
                <a className="projects__subtitle" href="https://browncsci1430.github.io/resources/cameras_vision_vs_graphics_demo/"
                target="_blank" rel="noreferrer">Pinhole Camera Models in Computer Vision vs. Computer Graphics</a>
                <div>
                    <a className="projects__subheading">Javascript, Three.js, HTML</a>
                </div>
                <div className="projects__description">
                    <li>
                    Employed front-end and back-end development using Javascript, HTML, and CSS to create an online website tutorial on 
                    camera projection and perspective projection for the class Computer Vision for professor Dr. James Tompkin
                    </li>
                    <li>
                    Improved upon two existing online tutorials on affine transformations and the fundamental matrix
                    </li>
                    <img src={TutorialImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title">MODEL BASED REINFORCEMENT LEARNING</h3>
                    <div className="projects__social">
                        <a href="https://github.com/Arnie-He/TOLD_ZERO" 
                        className="projects__social-icon" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle" href="https://www.overleaf.com/read/njtpvvfbvmzt#889585"
                target="_blank" rel="noreferrer">TOLD-ZERO: Generalize TD-MPC2 to discrete action spaces</a>
                <div>
                    <a className="projects__subheading">Jax, Gymnasium, Python</a>
                </div>
                <div className="projects__description">
                    <li>
                        Integrate Monte Carlo Tree Search (MCTS) into learning based on Task-Oriented Latent Dynamics (TOLD) model.
                    </li>
                    <li>
                        Benchmark TD-MPC2 (Temporal Difference Model Predictive Control) on tasks with continuous action spaces. 
                    </li>
                    <li>Graded and attended TA Hours and ED Hours for projects on image filtering, feature matching, camera geometry, scene 
                    classification, convolutional neural network, and a computer vision final project</li>
                    <img src={RlImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title">Head Teaching Assistant</h3>
                    <span className="projects__date" id="uta">Sep 2024 - Dec 2024</span>
                </div>
                <a className="projects__subtitle" href="https://browncsci1430.github.io/index.html" 
                    target="_blank" rel="noreferrer">Brown University CSCI1430: Computer Vision</a>
                <div className="projects__description">
                    <li>Work as one of the two head teaching assistants for the class CSCI 1430 Computer Vision</li>
                    <li>In addition to usual teaching assistant work, organize fellow ten undergraduate teaching assistants, directly help manage and 
                    develop the course with professor Dr. Srinath Sridhar, and host weekly grading/staff meetings</li>
                </div>
            </div>
        </div>
    )
}

export default Content;
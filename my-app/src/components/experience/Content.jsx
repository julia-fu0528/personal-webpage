import React from 'react';
import TutorialImg from "../../assets/tutorial.png";
import ResearchImg from "../../assets/research.png";
import IRLImg from "../../assets/irl.jpg";

const Content = () => {
    return (
        <div className="experience__info grid">
            <div className="experience__box">
                <div className="experience__topic">
                    <h3 className="experience__title">Vibration Haptics: Hand contact detection and localization with IMU</h3>
                    <span className="experience__date">Jan 2024 - Sep 2024</span>
                </div>
                <a className="experience__subtitle" href="https://ivl.cs.brown.edu/"
                    target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="experience__subheading">Advisors: Srinath Sridhar, Krishna Murthy Jatavallabhula</span>
                </div>
                <div className="experience__description">
                    <li>
                        {/* Training a model to detect hand-object contact and to localize the contact onto fingers with acceleration and gyroscope data from IMU sensors.  */}
                        Designed portable wrist hardware device containing with Inertial Measurement Unit (IMU), using which to collect hand object contact sensor and visual data
                    </li>
                    <li>
                        {/* Developed and 3D printed brace watch-like model to incorporate IMU and collect data. */}
                        Preprocessed RGB camera data with MANO fitting pipeline to obtain pose estimation results and contact heatmap, 
                        built a neural network to improve hand-object contact detection and localization 
                    </li>
                    <li>
                        {/* Collected data using Brown Interactive Camera System (BRICS) and labeled data by incorporating the MANO fitting pipeline.  */}
                        Integrated IMU sensor and its data visualization into Brown Interaction Capture System (BRICS), participated in the hardware assembling and software calibration for the room-sized capture studio with professor Dr. Srinath Sridhar
                    </li>
                </div>
                <img src={ResearchImg} alt="" className="experience__img" />
            </div>
            <div className="experience__box">
                <div className="experienceh__topic">
                    <h3 className="experience__title">Shaped-Based Skill Transfer by Learning Policy on Object Parts</h3>
                    <span className="experience__date" id="irl">2023-2024</span>
                </div>
                <a className="experience__subtitle" href="http://irl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Intelligent Robotics Lab</a>
                <div>
                    <span className="experience__subheading">Advisor: George Konidaris</span>
                </div>
                <div className="experience__description">
                    <li>
                        Learned latent representations of object parts for mugs and spatulas to carry out pouring and scooping tasks, and tried to learn a 
                        robust skill for all shapes of the same object category, with advisor Dr. George Konidaris
                    </li>
                    <li>
                        Incorporated Segment-Anything model to segment images of mugs into cup and handle and back projected the segmentation into point clouds. 
                    </li>
                    <li>
                        Developed a policy with lower costs than when learning on the whole object instead of object parts
                    </li>
                    <li>
                        Worked on ROS and reinforcement learning, Boston Dynamics Spot robots, and KUKA robotic arms with radar cameras
                    </li>
                                    
                </div>
                <img src={IRLImg} alt="" className="experience__img" />
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
       
        </div>
    )
}

export default Content;
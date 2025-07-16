import React from 'react';
import RlImg from "../../assets/rl.png";
import GraphicsImg from "../../assets/graphics.png";
import DlImg from "../../assets/dl.png";
import CvImg from "../../assets/cv.png";
import SweImg from "../../assets/swe.png";
import ResearchImg from "../../assets/research.png";
import IRLImg from "../../assets/irl.jpg";

const Content = () => {
    return (
        <div className="projects__info grid">
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title">Vibration Haptics: Hand contact detection and localization with IMU</h3>
                    <span className="projects__date">Jan 2024 - Sep 2024</span>
                </div>
                <a className="projects__subtitle" href="https://ivl.cs.brown.edu/"
                    target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="projects__subheading">Advisors: Srinath Sridhar, Krishna Murthy Jatavallabhula</span>
                </div>
                <div className="projects__description">
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
                <img src={ResearchImg} alt="" className="projects__img" />
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title">Shaped-Based Skill Transfer by Learning Policy on Object Parts</h3>
                    <span className="projects__date" id="irl">2023-2024</span>
                </div>
                <a className="projects__subtitle" href="http://irl.cs.brown.edu/"
                    target="_blank" rel="noreferrer">Brown Intelligent Robotics Lab</a>
                <div>
                    <span className="projects__subheading">Advisor: George Konidaris</span>
                </div>
                <div className="projects__description">
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
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title">MODEL BASED REINFORCEMENT LEARNING</h3>
                    <div className="projects__social">
                        <a href="https://github.com/Arnie-He/TOLD_ZERO" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                        <a href="https://www.overleaf.com/read/njtpvvfbvmzt#889585" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-file-alt"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle has__link" href="https://www.overleaf.com/read/njtpvvfbvmzt#889585"
                target="_blank" rel="noreferrer">TOLD-ZERO: Generalize TD-MPC2 to discrete action spaces</a>
                <div>
                    <span className="projects__subheading">Jax, Gymnasium, Python</span>
                </div>
                <div className="projects__description">
                    <li>
                        Integrate Monte Carlo Tree Search (MCTS) into learning based on Task-Oriented Latent Dynamics (TOLD) model.
                    </li>
                    <li>
                        Benchmark TD-MPC2 (Temporal Difference Model Predictive Control) on tasks with continuous action spaces using LightZero framework, and generalize TD-MPC2 to discrete action spaces. 
                    </li>
                    <li>
                    Analyze the role of planning in model-based reinforcement learning (MBRL), including the Model Predictive Path Integral (MPPI). 
                    </li>
                    <img src={RlImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title"> COMPUTER GRAPHICS</h3>
                    <div className="projects__social">
                        <a href="https://github.com/YixiangSun/2023-CSCI1230-final-project" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                        <a href="https://www.youtube.com/watch?v=prmrjpensuo" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-video"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle has__link" href="https://www.youtube.com/watch?v=prmrjpensuo" 
                    target="_blank" rel="noreferrer">Interactive Ball, Particle System, Camp Scene</a>
                <div>
                    <span className="projects__subheading">OpenGL, Blender, C++, C</span>
                </div>
                <div className="projects__description">
                    <li>
                        Generate fire particles that appear, rise, and disappear while changing color as flames in between rock and stick primitives. 
                    </li>
                    <li>
                        Create a ball that can change in material, glow when it touches the fire, catch fire or steam in smoke according to its material, extinguish the smoke after it touches the water, and put out fire.
                    </li>
                    <li>
                        Create dynamic water primitive with randomized heights.
                    </li>
                    <li>
                        Construct camp scene using Blender which contains collision system with the ball. 
                    </li>
                    <img src={GraphicsImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title"> STABLE DIFFUSION</h3>
                    <div className="projects__social">
                        <a href="https://github.com/julia-fu0528/3Dfusion" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle has__link" href="https://devpost.com/software/3dfusion?ref_content=user-portfolioref_feature=in_progress" 
                    target="_blank" rel="noreferrer">Text-to-Image Generation using Stable Diffusion</a>
                <div>
                    <span className="projects__subheading">Tensorflow, Python</span>
                </div>
                <div className="projects__description">
                    <li>
                        Implemented image generation with tensorflow by training and testing on Fashion MNIST datset. 
                    </li>
                    <li>
                        Achieved lower average loss than the original paper implemented in Pytorch. 
                    </li>
                    <img src={DlImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title"> IMAGE COLORIZATION</h3>
                    <div className="projects__social">
                        <a href="https://github.com/zguo47/CS1430-Final-Project" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle has__link" href="https://github.com/zguo47/CS1430-Final-Project" 
                    target="_blank" rel="noreferrer">U-Net, Deep CNN, and Conditional GAN for Auto-Colorization</a>
                <div>
                    <span className="projects__subheading">Pytorch, Python</span>
                </div>
                <div className="projects__description">
                    <li>
                        Implement image auto-colorization using UNet, Conditional GAN (Generative Adversarial Network) and Deep-Koalarization to compare these three models and their performance on the same two datsets. 
                    </li>
                    <li>
                        The patches of white in the images and the uneven distribution of colors in the ground-truth images might be the cause of ineffective auto-colorization. 
                    </li>
                    <li>
                        Replaced the generator in Conditional GAN with our trained UNet to improve performance.
                    </li>
                    <img src={CvImg} alt="" className="projects__img" />
                </div>
            </div>
            <div className="projects__box">
                <div className="projects__topic">
                    <h3 className="projects__title"> SOULFOOD</h3>
                    <div className="projects__social">
                        <a href="https://github.com/cs0320-s2023/soulfood" 
                        className="projects__social-icon" rel="noreferrer" target="_blank">
                        <i class="uil uil-github"></i>
                        </a>
                    </div>
                </div>
                <a className="projects__subtitle has__link" href="https://github.com/cs0320-s2023/soulfood"
                    target="_blank" rel="noreferrer">Restaurant Recommendation WebApp with Blog Posting Functionality</a>
                <div>
                    <span className="projects__subheading">Figma, Firebase, Flask, React, Python</span>
                </div>
                <div className="projects__description">
                    <li>
                        {/* Build WebApp that recommends restaurants based on the location, cuisine, style, or other labels that the user inputs.  */}
                        Built React WebApp that recommends restaurants based on labels input by the user using Figma and Python as backend
                    </li>
                    <li>
                    Designed and implemented front-end functionalities to allow users to post blogs about their experience and recommendation, 
                    as well as for other users to like, collect, or follow them. 
                    </li>
                    <li>
                        Mocked data in the backend including user and post id, restaurant labels, and user reviews using Firebase
                    </li>
                    <img src={SweImg} alt="" className="projects__img" />
                </div>
            </div>
        </div>
    )
}

export default Content;
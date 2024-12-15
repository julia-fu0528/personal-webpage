import React from 'react'
import ResearchImg from "../../assets/research.png";
import IRLImg from "../../assets/irl.jpg";
import HandsImg from "../../assets/GigaHands.png";
// import SPOTImg from "../../assets/SPOT.png";

const Info = () => {
    return (
        <div className="research__info grid">
            <div className="research__box">
                <div className="research__topic">
                    <h3 className="research__title"> GigaHands: A Massive Annotated Dataset of Bimanual Hand Activities </h3>
                    <span className="research__date">Jan 2024 - Nov 2024</span>
                </div>
                <a className="research__subtitle" href="https://ivl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="research__subheading">Advisors: Srinath Sridhar, Daniel Ritchie</span>
                </div>
                <div className="research__description">
                    <li>
                        Synchronized the 30 FPS frames in the RGB videos across 51 cameras in the Brown Interactive Capture Systems for accurate 2D and 3D key points and MANO model fitting. 
                    </li>
                    <li>
                        Generated and accumulated contact heatmap on the palms and backs of the left and right hand across bimanual hand-object and hand-hand activities of diverse scenes, such as boxing, massage, frying, and tea drinking. 
                    </li>
                    <li>
                        Collected data for the GigaHands dataset, mostly focusing on makeup, cleaning, and clothes folding scenes, which consist of more than forty actions with text annotations; and scanned the objects for 3D reconstruction. 
                    </li>
                    <li>
                        Tried to implement 3D Dynamic Gaussian Splatting on the multi-view camera data of scenes. 
                    </li>
                </div>
                <img src={HandsImg} alt="" className="research__img" />
            </div> 
            {/* <div className="research__box">
                <div className="research__topic">
                    <h3 className="research__title"> TactiDog: Touch Sensing on SPOT with Joint Torque Sensors </h3>
                    <span className="research__date"> 2024 - present</span>
                </div>
                <a className="research__subtitle" href="https://ivl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="research__subheading">Advisors: Srinath Sridhar</span>
                </div>
                <div className="research__description">
                    <li>
                        Develop a tactile sensing system on Boston Dynamics Spot robot with 12 joint torque sensors to localize contact on the robot body
                    </li>
                    <li>
                        Condition contact localization on the robot joint angles, taking into consideration the robot's dynamic, gait of its activites, contact force, contact angle, contact finger, and contact duration. 
                    </li>
                    <li>
                        Visualize SPOT mesh and contact location marker to faciliatate live demo of contact localization on the robot, potentially extending to the legs and arm. 
                    </li>
                </div>
                <img src={SPOTImg} alt="" className="research__img" />
            </div> */}
            <div className="research__box">
                <div className="research__topic">
                    <h3 className="research__title">Vibration Haptics: Hand contact detection and localization with IMU</h3>
                    <span className="research__date">Jan 2024 - Sep 2024</span>
                </div>
                <a className="research__subtitle" href="https://ivl.cs.brown.edu/"
                target="_blank" rel="noreferrer">Brown Interactive 3D Vision & Learning Lab</a>
                <div>
                    <span className="research__subheading">Advisors: Srinath Sridhar, Krishna Murthy Jatavallabhula</span>
                </div>
                <div className="research__description">
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
                <img src={IRLImg} alt="" className="research__img" />
            </div>
        </div>
    )
}

export default Info
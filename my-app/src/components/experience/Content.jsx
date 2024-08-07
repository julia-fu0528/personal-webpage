import React from 'react';

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
                    <li>Designed AI customer service based on Baidu UNIT intelligent conversation platform and Natural Language Processing</li>
                    <li>Received the PaddlePaddle AI Technical Engineer Certificate</li>
                    <li>Received the Certificate of Achievement as Intelligent Customer Service Product Operation Engineer by Baidu AI Cloud</li>
                    <li>Worked and attended meetings as part of the team for China Mobile Smart Card Production Platform</li>
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
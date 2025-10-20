import React from 'react';



const Content = () => {
    const [openSection, setOpenSection] = React.useState(null);

const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
};
    return (
        <div className="education__info grid">
            <div className="education__box">
                <div className="education__topic">
                    <h3 className="education__title"> BROWN UNIVERSITY</h3>
                    <span className="education__subtitle" 
                target="_blank" rel="noreferrer">Providence, RI</span>
                    <span className="education__date"> Sep 2022 - May 2026</span>
                </div>
                <div>
                    <span className="education__subheading">Sc.B. Computer Science; A.B. Applied Mathematics</span>
                </div>
                <div className="education__description">
                    <li>
                        <span className="list__heading"> GPA: </span>
                        4.0 / 4.0
                    </li>
                    <div className="collapsible">
                        <button className="collapsible__header" onClick={() => toggleSection('cs')}> 
                            Relevant Coursework (Computer Science): 
                            <span className={`arrow ${openSection === 'cs' ? 'open' : ''}`}>&#9662;</span>
                        </button>
                        {openSection === 'cs' && (
                          <ul className="collapsible__content">
                            <li className="inner__list"> - CSCI 2952X Research Topics in Self Supervised Learning</li>
                            <li className="inner__list"> - CSCI 2952N Reintegrating AI</li>
                            <li className="inner__list"> - CSCI 2951X Advanced Topics in Deep Learning </li>
                            <li className="inner__list"> - CSCI 2951F Learning and Sequential Decision Making </li>
                            <li className="inner__list"> - CSCI 1952A Human-AI Interaction</li>
                            <li className="inner__list"> - CSCI 1550 Probabilistic Methods in Computer Science</li>
                            <li className="inner__list"> - CSCI 1470 Deep Learning </li>
                            <li className="inner__list"> - CSCI 1430 Computer Vision </li>
                            <li className="inner__list"> - CSCI 1230 Computer Graphics </li>
                            <li className="inner__list"> - CSCI 1680 Computer Networks</li>
                            <li className="inner__list"> - CSCI 1570 Design and Analysis of Algorithms</li>
                            <li className="inner__list"> - CSCI 0320 Introduction to Software Engineering </li>
                            <li className="inner__list"> - CSCI 0330 Introduction to Computer Systems </li>
                            <li className="inner__list"> - CSCI 0190 Accelerated Introduction to Computer Science</li>
                            <li className="inner__list"> - DATA 0250 Applied Statistics in Python</li>
                            <li className="inner__list"> - CSCI 1973 Individual Independent Study </li>
                        </ul>
                        )}
                    </div>
                    <div className="collapsible">
                        <button className="collapsible__header" onClick={() => toggleSection('apma')}> 
                            Relevant Coursework (Applied Mathematics): 
                            <span className={`arrow ${openSection === 'apma' ? 'open' : ''}`}>&#9662;</span>
                        </button>
                        {openSection === 'apma' && (
                          <ul className="collapsible__content">
                            <li className="inner__list"> - APMA 2610 Recent Applications of Probability and Statistics</li>
                            <li className="inner__list"> - MATH 1630 Real Analysis</li>
                            <li className="inner__list"> - APMA 1690 Computational Probability and Statistics </li>
                            <li className="inner__list"> - APMA 1200 Operations Research: Probabilistic Models </li>
                            <li className="inner__list"> - MATH 1530 Abstract Algebra</li>
                            <li className="inner__list"> - APMA 1170 Introduction to Computational Linear Algebra</li>
                            <li className="inner__list"> - MATH 0540 Honors Linear Algebra</li>
                            <li className="inner__list"> - APMA 0360 Applied Partial Differential Equations</li>
                            <li className="inner__list"> - MATH 0350 Honors Multivariable Calculus</li>
                            <li className="inner__list"> - APMA 1550 Honors Statistical Inference</li>
                            <li className="inner__list"> - APMA 0350 Applied Ordinary Differential Equations</li>
                         </ul>
                        )}
                    </div>
                    <div className="collapsible">
                        <button className="collapsible__header" onClick={() => toggleSection('other')}> 
                             Other Coursework: 
                        <span className={`arrow ${openSection === 'other' ? 'open' : ''}`}>&#9662;</span>
                        </button>
                        {openSection === 'other' && (
                          <ul className="collapsible__content">
                            <li className="inner__list"> - ECON 1130 Intermediate Microeconomics (Mathematics) </li>
                            <li className="inner__list"> - ECON 1210 Intermediate Macroeconomics </li>
                            <li className="inner__list"> - ETHN 0090 The Border / La Frontera</li>
                        </ul>
                        )}
                    </div>
                    <div className="collapsible">
                        <button className="collapsible__header" onClick={() => toggleSection('activities')}> 
                         Leadership & Activities:
                        <span className={`arrow ${openSection === 'activities' ? 'open' : ''}`}>&#9662;</span>
                        </button>
                        {openSection === 'activities' && (
                          <ul className="collapsible__content">
                           <li className="inner__list activities"> Brown Moli East Asian Dance Company: Co-Secretary Chair; Co-Captain </li>
                           <li className="inner__list2"> - Organized members, logistics, and finance for the club, communicate with student activities office and financial supervisors </li>
                           <li className="inner__list2"> - Prepare for annual spring show, teach Chinese dances, organize rehearsals, participate in shows on and off campus</li>
                           <li className="inner__list2"> - Taught three dance pieces in the past year. </li>
                           <li className="inner__list activities"> Brown IgniteCS: Member </li>
                           <li className="inner__list2">
                               - Designed and developed a series of courses related to AI and taught as guest lecturer at Nathanael Greene Middle School 
                           </li>
                           <li className="inner__list2">
                               - Designed and developed the coding club on HTML, CSS at the Sophia Academy coding club for 1.5 hours per week
                           </li>
                        </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="education__box">
            <div className="education__topic">
                    <h3 className="education__title"> SHANGHAI FOREIGN LANGUAGE SCHOOL</h3>
                    <span className="education__subtitle" 
                target="_blank" rel="noreferrer">Shanghai, China</span>
                    <span className="education__date"> Sep 2019 - June 2022</span>
                </div>
                <div>
                    <span className="education__subheading"> High School Diploma</span>
                </div>
                <div className="education__description">
                    <li>
                        <span className="list__heading"> GPA: </span>
                        4.0 / 4.0
                    </li>
                    <div className="collapsible">
                        <button className="collapsible__header" onClick={() => toggleSection('sfls')}> 
                            Leadership:
                            <span className={`arrow ${openSection === 'sfls' ? 'open' : ''}`}>&#9662;</span>
                        </button>
                        {openSection === 'sfls' && (
                          <ul className="collapsible__content">
                           <li className="inner__list"> - President of the Student Deaprtment of Arts and Sports </li>
                           <li className="inner__list"> - Vice President of the SFLS Physics Club</li>
                           <li className="inner__list"> - Vice President of the SFLS Mathematics Club</li>
                           <li className="inner__list"> - Vice President of the SFLS Acadeca Club</li>
                          </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectFields.css';
import checkedBox from './checkedBox.png';
import uncheckedBox from './uncheckedBox.png';
import SubDropdownMenuItemProjectsPage from './SubDropdownItem';

export class ProjectFields extends Component {

    componentDidMount() {
        // DISPLAY CONTROL BUTTON
            document.getElementById("branch-display-control-button-ProjectsPage").addEventListener("click", bDCBODMProjectsPage);
            //bDCBODMProjectsPage = branch display Control Button Of Dropdown Menu ProjectsPage
            function bDCBODMProjectsPage() {
                if(document.getElementById("branch-display-control-ProjectsPage-dropdown").style.display == "none") {
                    document.getElementById("branch-display-control-ProjectsPage-dropdown").style.display = "block";
                    document.getElementById("course-display-control-ProjectsPage-dropdown").style.display = "none";
                    document.getElementById("club-display-control-ProjectsPage-dropdown").style.display = "none";
                }
                else {
                    document.getElementById("branch-display-control-ProjectsPage-dropdown").style.display = "none";
                }
            }

            document.getElementById("course-display-control-button-ProjectsPage").addEventListener("click", coDCBODMProjectsPage);
            //coDCBODMProjectsPage = course display Control Button Of Dropdown Menu ProjectsPage
            function coDCBODMProjectsPage() {
                if(document.getElementById("course-display-control-ProjectsPage-dropdown").style.display == "none") {
                    document.getElementById("course-display-control-ProjectsPage-dropdown").style.display = "block";
                    document.getElementById("branch-display-control-ProjectsPage-dropdown").style.display = "none";
                    document.getElementById("club-display-control-ProjectsPage-dropdown").style.display = "none";
                }
                else {
                    document.getElementById("course-display-control-ProjectsPage-dropdown").style.display = "none";
                }
            }

            document.getElementById("club-display-control-button-ProjectsPage").addEventListener("click", clDCBODMProjectsPage);
            //clDCBODMProjectsPage = club display Control Button Of Dropdown Menu ProjectsPage
            function clDCBODMProjectsPage() {
                if(document.getElementById("club-display-control-ProjectsPage-dropdown").style.display == "none") {
                    document.getElementById("club-display-control-ProjectsPage-dropdown").style.display = "block";
                    document.getElementById("branch-display-control-ProjectsPage-dropdown").style.display = "none";
                    document.getElementById("course-display-control-ProjectsPage-dropdown").style.display = "none";
                }
                else {
                    document.getElementById("club-display-control-ProjectsPage-dropdown").style.display = "none";
                }
            }

        // // CHECKBOX CONTROL BUTTON
        //     document.getElementById("checkbox-control-button-ProjectsPage").addEventListener("click", cCBODMIProjectsPage);
        //     //cCBODMIProjectsPage = checkbox Control Button Of Dropdown Menu Items ProjectsPage
        //     function cCBODMIProjectsPage() {
        //         if(document.getElementById("checkbox-dropdown-ProjectsPage").src == "checkedBox.png") {
        //             document.getElementById("checkbox-dropdown-ProjectsPage").src = "uncheckedBox.png";
        //         }
        //         else {
        //             document.getElementById("checkbox-dropdown-ProjectsPage").src = "checkedBox.png";
        //         }
        //     }

    }

    render () {

        return (
            
            <div className="project-fields-container">
                
                {/* BRANCH */}
                <div id="branch-dropdown-button-ProjectsPage">

                    {/* MAIN BUTTON */}
                    <div className="main-dropdown-button-ProjectsPage">
                        <button id="branch-display-control-button-ProjectsPage">
                            <div className="dropdown-title-box-ProjectsPage">
                                <div>Branch (5)</div>
                            </div>
                        </button>
                    </div>
                    
                    <div id="branch-display-control-ProjectsPage-dropdown" style={{display: "none"}}>
                        
                        <SubDropdownMenuItemProjectsPage menuItemName="Mechanical"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Electrical"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Computer"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Chemical"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Civil"/>

                    </div>
                </div>

                {/* COURSE */}
                <div id="course-dropdown-button-ProjectsPage">

                    {/* MAIN BUTTON */}
                    <div className="main-dropdown-button-ProjectsPage">
                        <button id="course-display-control-button-ProjectsPage">
                            <div className="dropdown-title-box-ProjectsPage">
                                <div>Course (2)</div>
                            </div>
                        </button>
                    </div>

                    <div id="course-display-control-ProjectsPage-dropdown" style={{display: "none"}}>

                        <SubDropdownMenuItemProjectsPage menuItemName="Course 1"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Course 2"/>

                    </div>
                </div>

                {/* CLUB */}
                <div id="club-dropdown-button-ProjectsPage">

                    {/* MAIN BUTTON */}
                    <div className="main-dropdown-button-ProjectsPage">
                        <button id="club-display-control-button-ProjectsPage">
                            <div className="dropdown-title-box-ProjectsPage">
                                <div>Club (2)</div>
                            </div>
                        </button>
                    </div>

                    <div id="club-display-control-ProjectsPage-dropdown" style={{display: "none"}}>

                        <SubDropdownMenuItemProjectsPage menuItemName="Club 1"/>
                        <SubDropdownMenuItemProjectsPage menuItemName="Club 2"/>

                    </div>
                </div>

            </div>

        );
    }

}

export default ProjectFields;

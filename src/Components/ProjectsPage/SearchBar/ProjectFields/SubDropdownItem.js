import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import checkedBox from './checkedBox.png';
import uncheckedBox from './uncheckedBox.png';

export class SubDropdownMenuItemProjectsPage extends Component {

    // CHECKBOX CONTROL BUTTON
        //cCBODMIProjectsPage = checkbox Control Button Of Dropdown Menu Items ProjectsPage
        cCBODMIProjectsPage = () => {
            
            if(document.getElementById("checkbox-dropdown-ProjectsPage").src == "checkedBox.png") {
                document.getElementById("checkbox-dropdown-ProjectsPage").src = "uncheckedBox.png";
            }
            else {
                document.getElementById("checkbox-dropdown-ProjectsPage").src = "checkedBox.png";
            }
        }

    render () {
        return (
            <div className="sub-dropdown-button-ProjectsPage">
                <button id="checkbox-control-button-ProjectsPage" onClick={this.cCBODMIProjectsPage}>
                    <div className="dropdown-sub-box-ProjectsPage">
                        <div><img id="checkbox-dropdown-ProjectsPage" src={checkedBox} alt="Check Box" />{this.props.menuItemName}</div>
                    </div>
                </button>
            </div>
        );
    }
}

export default SubDropdownMenuItemProjectsPage;

// src={checkedBox}
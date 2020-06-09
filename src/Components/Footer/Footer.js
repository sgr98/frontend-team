import React, { Component } from 'react'
import './Footer.css';
import {FaTwitter } from 'react-icons/fa'
import {FaInstagram } from 'react-icons/fa'
import {AiOutlineFacebook } from 'react-icons/ai'
class Footer extends Component
 {
  render() {
    return (

      <div className="footer">
        
        <div className="above">
          <div className="b"></div>
          <div className="f"></div>
          <div className="i"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>


        <div className="above-nxt">
          <div className="leftspace"></div>
          <div className="b-n"></div>
          <div className="mid-space"></div>
          <div className="f-n"></div>
          <div className="mid-space"></div>
          <div className="i-n"></div>
          <div className="rightspace"></div>
        </div>

        <div className="middle">
            <div className="quick">Quick access</div>
          
            <div className="home" id="home">
              <p>Home</p>
              <p>About</p>
              <p>Club</p>
              <p>Achievements</p>
            </div>

            <div className="home" id="featured">
              <p>featured</p>
              <p>Ideology</p>
              <p>Digital Wizards</p>
              <p>Risha lab</p>
            </div>

            <div className="home" id="announcements">
              <p>Announcements</p>
              <p>club heads</p>
              <p>Techmaniacs</p>
              <p>Inter IIT Tech Meet</p>
            </div>

            <div className="home" id="past">
              <p>Past Activities</p>
              <p>Tech info</p>
              <p>Gagan Vedhi</p>
              <p>Ongoing Projects</p>
            </div>

            <div className="home" id="upcomingactivities">
              <p>Upcoming Activities</p>
              <p>Facilities</p>
              <p>Automobiles club</p>
              <p>Challenges</p>
            </div>

            <div className="home" id="upcomingtalks">
              <p>Upcoming Talks</p>
              <p>Idea Square</p>
              <p>3D printing club</p>
              <p>FAQs</p>
            </div>

            <div className="home" id="upcomingworkshops">
              <p>Upcoming Workshops</p>
              <p>Web Team</p>
              <p>CNC Club</p>
              <p>.</p>
            </div>

            <div className="home" id="calender">
              <p>Calender Activities</p>
              <p>.</p>
              <p>Amphibians</p>
              <p>.</p>
            </div>

            <div className="Hidden">
              <p>Home</p>
              <p>About</p>
              <p>Clubs</p>
              <p>Achievements</p>
              <p>Ideology</p>
              <p>Challenges</p>
              <p>FAQs</p>
            </div>

            
              
           </div>

           <div className="footer-top">


                <div className="segment-one"><a href="https://mobile.twitter.com"><FaTwitter /></a></div>
                <div className="segment-onee"><a href="https://www.facebook.com/"><AiOutlineFacebook/></a></div>
                <div className="segment-oneee"><a href="https://instagram.com"><FaInstagram /></a></div>
              
            
             
                <div><h3 className="segment-two"> TechHubIIT TIRUPATI</h3></div>
              

                <div><h3 className="segment-three">© 2020 IdeaSquare.All rights reserved</h3></div>
         
        </div>

        <div className="App-footer">


                <div className="segment-one"><a href="#"><FaTwitter /></a></div>
                <div className="segment-onee"><a href="https://www.facebook.com/"><AiOutlineFacebook/></a></div>
                <div className="segment-oneee"><a href="https://instagram.com"><FaInstagram /></a></div>
                            

                <div><h3 className="segment-three">© 2020 IdeaSquare. All rights reserved</h3></div>
         
        </div>
      
      </div>
    );
  }
}

export default Footer;

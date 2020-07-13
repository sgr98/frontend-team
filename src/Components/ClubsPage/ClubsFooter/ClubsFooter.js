import React, { Component } from 'react'
import "./footer.css";
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import '../node_modules/bootstrap/dist/css/bootstrap.css'



export default class Footer extends Component {
  render() {
    return (
          <div >
            <div className="container-fluid wrapper">
              <div className="row top">
                <div className="quickLinks col-md-2"><p>Quick Links</p></div>
                <div className="cont col-md-10 col-12">
                  <div  className="all ">
                    <p>home</p> 
                    <p>events</p> 
                  </div>
                  <div  className="all ">
                    <p>tac 2020</p> 
                    <p>Activities</p>  
                  </div>
                  <div  className="all ">
                    <p>alumini</p> 
                    <p>workshop</p>  
                  </div>
                  <div  className="all ">
                    <p>faq</p> 
                    <p>talks</p>  
                  </div>
                  <div  className="all ">
                    <p>projects</p> 
                    <p>calender</p>  
                  </div>
                  <div  className="all ">
                    <p>infrastructures</p> 
                    <p>challenges</p>  
                  </div>
                  <div  className="all fac">
                    <p>Faculty advisors</p> 
                    <p>competitions</p>  
                  </div>
                  <div  className="all">
                    <p>blogs</p> 
                    <p>webteam</p>  
                  </div>
                </div>
              </div>
              <br/>
              <div className="row bottom">
                <div className="col-sm-2 lower-one bt">
                  <div className="row connect">CONNECT WITH US</div>
                  <div className=" row icons">
                    <div className="icn youtube"><FaYoutube/></div>
                    <div className="icn"><FaInstagram/></div>
                    <div className="icn"><FaFacebook/></div>
                  </div>
                </div>
                <div className="col-sm-6 lower-two bt">
                  MADE WITH<p className="heart"><AiFillHeart/></p>BY <strong> WEB TEAM </strong> TAC 2020-21
                  <p className="techhub"><strong>TECH HUB IIT TIRUPATI</strong></p>
                </div>
                <div className="col-sm-4  lower-three bt">
                  <p>© 2020 IDEA SQUARE. ALL RIGHTS RESERVED</p>
                </div>
              </div>
            </div>
          </div>   
    )
  }
}

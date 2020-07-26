import React, { useState } from 'react';
import './AchievementsContainer.css';
import Card from '../AchievementCard/AchievementCard';
import { Modal,Carousel } from 'react-bootstrap';

const AchievementsContainer = ({
  achievementsData=[],year=""
}) => {

    const [show, setShow] = useState(false);
    const [gallery, setGallery] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = (e,gallery_a) => {if(e.target.className!="read-more-button"){setGallery(gallery_a);setShow(true);}}

    return (
      
        <div style=
          {{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto 2%',
          }}>
          {achievementsData.length !== 0 ? (
            <div>        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Achievement Highlights</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Carousel>
                  {gallery.map((single,index) => (
                  <Carousel.Item key={"Car"+index}>
                      <img
                      className="d-block w-100"
                      src={`${process.env.REACT_APP_BASE_URL}/images/${single}`}
                      style={{
                        display: "block",
                        maxWidth:"85vw",
                        maxHeight:"70vh",
                        width: "auto",
                        height: "auto"
                      }}
                      alt={"Highlights Pic#" + index}
                      />
                  </Carousel.Item>
                  ))}
                  </Carousel>
                </Modal.Body>
              </Modal>
            <div className="achievements-limelight">
                <h1 dangerouslySetInnerHTML={{__html:"HALL OF FAME "+year}}></h1>
            </div>
              {achievementsData.map((single,index) => (
                <Card key={"card"+index} single={single} handleClick={(e)=>{handleShow(e,single.pics_url)}}/>
              ))}
            </div>
          ) : null}
        </div>
      );
  };
  
  export default AchievementsContainer;
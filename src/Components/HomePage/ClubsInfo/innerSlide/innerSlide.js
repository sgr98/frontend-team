import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const InnerSlide = (props) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  useEffect(() => {
    //Outer Container
    if (width > 760) {
      new Swiper(`#ClubeSlideOuter-container`, {
        spaceBetween: 30,
        navigation: {
          nextEl: '#ClubeSlideOuter-swiper-button-next',
          prevEl: '#ClubeSlideOuter-swiper-button-prev',
        },
        slidesPerView: 1,
        pagination: {
          el: `.swiper-pagination-outer`,
          clickable: true,
        },
      });
    } else {
      new Swiper(`#ClubeSlideOuter-container`, {
        spaceBetween: 30,
        navigation: {
          nextEl: '#ClubeSlideOuter-swiper-button-next',
          prevEl: '#ClubeSlideOuter-swiper-button-prev',
        },
        slidesPerView: 1,
        pagination: {
          el: `.swiper-pagination-outer`,
          clickable: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
      });
    }

    //Inner Container
    if (width > 768) {
      new Swiper(`.ClubeSlideInner-container${props.index}`, {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: `.swiper-pagination-inner${props.index}`,
          clickable: true,
        },
        nested: true,
      });
    } else if (width > 430) {
      new Swiper(`.ClubeSlideInner-container${props.index}`, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: `.swiper-pagination-inner${props.index}`,
          clickable: true,
        },
        nested: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
      });
    } else {
      new Swiper(`.ClubeSlideInner-container${props.index}`, {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: `.swiper-pagination-inner${props.index}`,
          clickable: true,
        },
        nested: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
      });
    }
  }, [width, props.index]);

  return (
    <div className="swiper-slide" id="ClubeSlideOuter-swiper-slide">
      <div id="ClubeSlide-Header">
        <div id="ClubeSlide-logo-title">
          <div>
            <Container>
              <Row>
                <Col>
                  <Image
                    id="ClubeSlide-club-image"
                    src={props.data.clubLogo}
                    rounded
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div id="ClubeSlide-club-title">{props.data.clubName}</div>
        </div>
        <hr />
        {width <= 768 ? (
          <div>
            <span id="ClubeSlide-club-cordinator-title">
              {props.data.clubCordinator}
            </span>
            <br />
            <span>Club Cordinator</span>
          </div>
        ) : null}
        {width > 768 ? (
          <div id="ClubeSlide-cordinator">
            <div>
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      id="ClubeSlide-club-image"
                      src={props.data.cordinatorImage}
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                paddingRight: 3,
              }}
            >
              <span id="ClubeSlide-club-cordinator-title">
                {props.data.clubCordinator}
              </span>
              <span>Club Cordinator</span>
            </div>
          </div>
        ) : null}
      </div>
      <p id="ClubeSlide-description">{props.data.clubDescription}</p>
      {/* <div
        className={`swiper-container ClubeSlideInner-container${props.index}`}
        id="ClubeSlideInner-container"
      >
        <div className="swiper-wrapper">
          {props.data.clubImages.map(({ imageUrl }, index) => (
            <div
              key={index}
              className="swiper-slide"
              id="ClubeSlideInner-swiper-slide"
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src={imageUrl}
                alt={`ClubSlide${index}`}
              />
            </div>
          ))}
        </div>
      </div> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          marginBottom: '10px',
        }}
      >
        {width < 768 ? (
          <Button
            href={props.data.buttonUrl[0].url}
            id="ClubeSlide-btn"
            variant="outline"
          >
            {props.data.buttonUrl[0].name}
          </Button>
        ) : (
          <>
            <Button id="ClubeSlide-btn" variant="outline">
              Visit Our Page
            </Button>
            <Button id="ClubeSlide-btn" variant="outline">
              Resources
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default InnerSlide;

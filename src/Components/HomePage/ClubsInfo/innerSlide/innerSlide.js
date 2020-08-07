import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Swiper from 'swiper';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const InnerSlide = (props) => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const onClickHandler = () => {
    props.history.push(`/clubs/${props.data.name}`);
  };

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
                  {/* <Image
                    id="ClubeSlide-club-image"
                    src={props.data}
                    rounded
                  /> */}
                </Col>
              </Row>
            </Container>
          </div>
          <div id="ClubeSlide-club-title">{props.data.name}</div>
        </div>
        <hr />
        {width <= 768 ? (
          <div>
            <span id="ClubeSlide-club-cordinator-title">{props.data.head}</span>
            <br />
            <span>Club Head</span>
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
                      src={props.data.dp_url?`${process.env.REACT_APP_BASE_URL}/images/${props.data.dp_url}`:""}
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
              <span id="ClubeSlide-club-cordinator-title">Club Head</span>
              <span>{props.data.head}</span>
            </div>
          </div>
        ) : null}
      </div>

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
      <div className="images-InnerSlide">
        <img
          src={props.data.logo_url?`${process.env.REACT_APP_BASE_URL}/images/${props.data.logo_url}`:""}
          alt="logo"
          className="clubLogo-innerSlide"
        />
        <img
          src="https://www.lstmed.ac.uk/sites/default/files/styles/mc-580-16x9-node/public/content/pages/images/iStock-960268208.jpg?itok=nAmhA9t1" //[TODO]
          alt="logo"
          className="resourcesImage-innerSlide"
        />
      </div>
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
          <>
            <Button
              id="ClubeSlide-btn"
              variant="outline"
              onClick={onClickHandler}
            >
              Visit Our Page
            </Button>
            <Button
              id="ClubeSlide-btn"
              variant="outline"
              onClick={() => {
                window.open(props.data.resources, '_blank');
              }}
            >
              Resources
            </Button>
          </>
        ) : (
          <>
            <Button
              id="ClubeSlide-btn"
              variant="outline"
              onClick={onClickHandler}
            >
              Visit Our Page
            </Button>
            <Button
              id="ClubeSlide-btn"
              variant="outline"
              onClick={() => {
                window.open(props.data.resources, '_blank');
              }}
            >
              Resources
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(InnerSlide);

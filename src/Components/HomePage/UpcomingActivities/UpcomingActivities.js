import React, { useEffect } from "react";
import "./UpcomingActivities.css";
import Swiper from "swiper";
import Modal from "./Modal/Modal";

const data = [
  {
    buttonTitle: "Join Telegram",
    title: "Let’s Download Telegram",
    description:
      " Justice League’s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",
    postRequestUrl: "localhost",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg",
  },
  {
    buttonTitle: "Join Telegram",
    title: "Let’s Download Telegram",
    description:
      " Justice League’s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",
    postRequestUrl: "#!",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg",
  },
  {
    buttonTitle: "Join Telegram",
    title: "Let’s Download Telegram",
    description:
      " Justice League’s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",
    postRequestUrl: "#!",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg",
  },
  {
    buttonTitle: "Join Telegram",
    title: "Let’s Download Telegram",
    description:
      " Justice League’s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",
    postRequestUrl: "#!",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg",
  },
  {
    buttonTitle: "Join Telegram",
    title: "Let’s Download Telegram",
    description:
      " Justice League’s Snyder cut realesing exclusively on HBO Max and Telegram in 2021.",
    postRequestUrl: "#!",
    imageUrl:
      "https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg",
  },
];

const UpcomingActivities = () => {
  useEffect(() => {
    var swiper = new Swiper("#UpcomingActivities-swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: "#UpcomingActivities-swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      lazy: true,
      navigation: {
        nextEl: "#UpcomingActivities-swiper-button-next",
        prevEl: "#UpcomingActivities-swiper-button-prev",
      },
    });
  }, []);

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      <div id="UpcomingActivitiescenter">
        <div className="UpcomingActivitiescenter heading-carousel">
          Upcoming Activities
        </div>
        <div
          className="swiper-container"
          id="UpcomingActivities-swiper-container"
        >
          <div id="wrapper1" className="swiper-wrapper">
            {data.map((item, index) => (
              <div
                className="swiper-slide"
                id="UpcomingActivities-swiper-slide"
                key={index}
              >
                <img
                  id="UpcomingActivities-swipe-image"
                  src={item.imageUrl}
                  alt="news"
                />
                <span id="UpcomingActivities-swipe-title">
                  {item.title + index}
                </span>
                <span id="UpcomingActivities-swipe-description">
                  {item.description}
                </span>
                <div id="UpcomingActivitiescenter">
                  {/* <Button id="UpcomingActivities-swipe-btn" variant="outline">
                    Join Telegram
                  </Button> */}
                  <Modal
                    postRequestUrl={item.postRequestUrl}
                    title={item.title}
                    description={item.description}
                    buttonTitle={item.buttonTitle}
                  />
                </div>
              </div>
            ))}
          </div>
          {width > 500 ? (
            <>
              <div
                className="swiper-button-next"
                id="UpcomingActivities-swiper-button-next"
              ></div>
              <div
                className="swiper-button-prev"
                id="UpcomingActivities-swiper-button-prev"
              ></div>
            </>
          ) : null}
          <div
            className="swiper-pagination"
            id="UpcomingActivities-swiper-pagination"
          ></div>
        </div>
      </div>
    </>
  );
};

export default UpcomingActivities;

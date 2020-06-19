import React from 'react';
import './ClubSlide.css';
import InnerSlide from './innerSlide/innerSlide';

const data = [
  {
    id: 1,
    clubImages: [
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
      {
        imageUrl:
          'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      },
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
    ],
    clubName: 'Robotic Club',
    clubLogo:
      'https://cdn.thecollegefever.com/upload/21104692-1547408000199.png',
    clubCordinator: 'Saleeq',
    cordinatorImage:
      'https://cdn4.iconfinder.com/data/icons/helmet/512/spider-man-spiderman-face-mask-round-avatar-512.png',
    clubDescription:
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonUrl: [
      {
        name: 'Visit our Website',
        url: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
      {
        name: ' Club Projects',
        url: '#!',
      },
      {
        name: 'Club Resources',
        url: '#!',
      },
    ],
  },
  {
    id: 2,
    clubImages: [
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
      {
        imageUrl:
          'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      },
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
    ],
    clubName: 'Sargam',
    clubLogo:
      'https://cdn.thecollegefever.com/upload/21104692-1547408000199.png',
    clubCordinator: 'Saleeq',
    cordinatorImage:
      'https://cdn4.iconfinder.com/data/icons/helmet/512/spider-man-spiderman-face-mask-round-avatar-512.png',
    clubDescription:
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonUrl: [
      {
        name: 'Visit our Website',
        url: '#!',
      },
      {
        name: ' Club Projects',
        url: '#!',
      },
      {
        name: 'Club Resources',
        url: '#!',
      },
    ],
  },
  {
    id: 3,
    clubImages: [
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
      {
        imageUrl:
          'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
      },
      {
        imageUrl:
          'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
      },
      {
        imageUrl:
          'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
    ],
    clubName: 'Coding Club',
    clubLogo:
      'https://cdn.thecollegefever.com/upload/21104692-1547408000199.png',
    clubCordinator: 'Saleeq',
    cordinatorImage:
      'https://cdn4.iconfinder.com/data/icons/helmet/512/spider-man-spiderman-face-mask-round-avatar-512.png',
    clubDescription:
      'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    buttonUrl: [
      {
        name: 'Visit our Website',
        url: '#!',
      },
      {
        name: ' Club Projects',
        url: '#!',
      },
      {
        name: 'Club Resources',
        url: '#!',
      },
    ],
  },
];

const ClubSlide = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <>
      <div id="ClubeSlide-page-container">
        <div
          className="swiper-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="swiper-container" id="ClubeSlideOuter-container">
            <div className="swiper-wrapper">
              {data.map((single, index) => (
                <InnerSlide key={index} index={index} data={single} />
              ))}
            </div>
          </div>
          {width > 768 ? (
            <>
              <div
                className="swiper-button-next"
                id="ClubeSlideOuter-swiper-button-next"
              ></div>
              <div
                className="swiper-button-prev"
                id="ClubeSlideOuter-swiper-button-prev"
              ></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ClubSlide;

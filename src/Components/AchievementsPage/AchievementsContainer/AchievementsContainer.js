import React from 'react';
import './AchievementsContainer.css';
import Card from '../AchievementCard/AchievementCard';

const AchievementsContainer = () => {
    const achievementsData=[
        {
            title:"Achievement Title",
            date:"2020-07-22T01:04:00.000+00:00",
            caption:"CATCHY CAPTION LOL",
            description:"Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it ROS (Robot Operating System)!Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it ROS (Robot Operating System)!"
        },
        {
            title:"Achievement Title",
            date:"2020-07-22T01:04:00.000+00:00",
            caption:"CATCHY CAPTION LOL",
            description:"Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it ROS (Robot Operating System)!"
        },
        {
            title:"Achievement Title",
            date:"2020-07-22T01:04:00.000+00:00",
            caption:"CATCHY CAPTION LOL",
            description:"Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it ROS (Robot Operating System)!"
        },
        {
            title:"Achievement Title",
            date:"2020-07-22T01:04:00.000+00:00",
            caption:"CATCHY CAPTION LOL",
            description:"Have you ever wondered “How to coordinate between multiple drones? How to simulate a manipulator or a robot? ate a manipulator or a How does a robot map the environment and navigate in it ROS (Robot Operating System)!"
        }
    ]
    return (
        <div style=
          {{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto 2%',
          }}>
          {achievementsData.length !== 0 ? (
            <div>
            <div className="achievements-limelight">
                <h1>HALL OF FAME 2020</h1>
            </div>
              {achievementsData.map((single) => (
                <Card key={single._id} single={single}/>
              ))}
            </div>
          ) : null}
        </div>
      );
  };
  
  export default AchievementsContainer;
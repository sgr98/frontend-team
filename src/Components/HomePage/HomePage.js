/* eslint-disable arrow-body-style */
import React from "react";
import Calendar from "./Calendar/Calendar";
import "./HomePage.css";
import ActivitiesShowcase from "./ActivitiesShowcase/ActivitiesShowcase";
import Featured from "./Featured/Featured";
import UpcomingActivities from "./UpcomingActivities/UpcomingActivities";
import UpcomingTalks from "./UpcomingTalks/UpcomingTalks";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Featured />
      <ActivitiesShowcase />
      <UpcomingActivities />
      <UpcomingTalks />
      <Calendar
        events={[
          {
            date: 5,
            image:
              "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            name: "Lorem Ipsum",
          },
          {
            date: 20,
            image:
              "https://images.unsplash.com/photo-1546767858-b102785c0794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
            name: "Lorem Ipsum",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;

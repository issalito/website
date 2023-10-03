import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#00000">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#000000", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Mary Goreth Sec. School, Kilimanjaro Tanzania
          </h3>
          <p>ACSEE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#000000", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Dar es Salaam, Dar es Salaam Tanzania
          </h3>
          <p>
            Bachelor of Science Degree in Computer Enginnering and Infomation
            Technology
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2022"
          iconStyle={{ background: "#dbb610", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Imatic technologies, Dar es Salaam Tanzania
          </h3>
          <p>Student Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

import React, { useEffect } from "react";
import "./OurMethodology.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import images from "../../constants/images";
import { BiCustomize } from "react-icons/bi";
import { CgBrowser } from "react-icons/cg";

function OurMethodology() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <VerticalTimeline>
        <div style={{ textAlign: "center" }}>
          <h1 className="heading">Our Implementation Methodology</h1>
        </div>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f69220", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "transparent",
            color: "#fff",
            border: "2px solid #f69220",
          }}
          icon={
            <img
              src={images.projectplan}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#fff" }}
          >
            Project Planning
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ border: "2px solid #f69220" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "#fff",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={
            <img
              src={images.analytices}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#f69220" }}
          >
            Business Analysis & Gap Fit Analysis
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f69220", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={<BiCustomize color="#f69220" />}
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "white" }}
          >
            Customization (if gaps identified)
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ border: "2px solid #f69220" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={
            <img
              src={images.configuree}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            style={{ color: "#f69220" }}
            className="vertical-timeline-element-title innnerheading"
          >
            Setup and Configuration
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f69220", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={
            <img
              src={images.training2}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#fff" }}
          >
            Users Training
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: "2px solid #f69220" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={
            <img
              src={images.testing2}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#f69220" }}
          >
            Pilot Testing
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f69220", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={<CgBrowser color="#f69220" />}
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#fff" }}
          >
            Go Live
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ border: "2px solid #f69220" }}
          contentArrowStyle={{ borderRight: "7px solid  #f69220" }}
          iconStyle={{
            background: "white",
            border: "2px solid #f69220",
            color: "#fff",
          }}
          icon={
            <img
              src={images.mainn}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <h2
            className="vertical-timeline-element-title innnerheading"
            style={{ color: "#f69220" }}
          >
            Support and Maintenance
          </h2>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default OurMethodology;

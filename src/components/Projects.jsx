import React from "react";
import "./projects.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExtensionIcon from "@mui/icons-material/Extension";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import { color } from "framer-motion";

export default function Projects() {
  return (
    <div className="projects">
      <h1 align="center">Work</h1>
      <VerticalTimeline className="line" lineColor="#800080">
        <VerticalTimelineElement
          className="vertical-timeline-element -1"
          iconStyle={{ background: "#000", color: "#fff" }}
          contentStyle={{
            background: "#000",
            color: "#fff",

            border: "1px solid white",
          }}
          icon={<LocalLibraryIcon style={{ background: "transparent" }} />}
          
        >
          <div className="first">
            <h2>Libray Management System</h2>
            <p>
              My Java-based library management project efficiently tracks and
              manages library resources, offering features such as book
              cataloging, borrower management, and due date tracking, all while
              showcasing a strong grasp of object-oriented programming concepts.
            </p>
            <button>
              <a href="https://github.com/PremanandPhuke/LMS_java" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element -1"
          iconStyle={{ background: "#000", color: "#fff" }}
          contentStyle={{
            background: "#000",
            color: "#fff",

            border: "1px solid white",
          }}
          icon={<LocalLibraryIcon style={{ background: "transparent" }} />}
          
        >
          <div className="first">
            <h2>Tic Tac Toe</h2>
            <p>
              This project is designed as a learning resource for beginners and
              intermediate programmers who want to explore and showcase
              Object-Oriented Programming (OOP) principles through the
              implementation of the classic Tic-Tac-Toe game in Java.
            </p>
            <button>
              <a href="https://github.com/PremanandPhuke/Tic-Tac-Toe/" target="_blank">
                Source Code
              </a>
            </button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element -1"
          iconStyle={{ background: "#000", color: "#fff" }}
          contentStyle={{
            background: "#000",
            color: "#fff",

            border: "1px solid white",
          }}
          icon={<MusicNoteIcon style={{ background: "transparent" }} />}
          
        >
          <div className="first">
            <h2>Musify : A Web Music Player</h2>
            <p>
              A digital music service that provides access to a vast collection
              of songs, playlists, and personalized recommendations, with easy
              streaming capabilities.
            </p>
            <button>
              <a href="https://github.com/PremanandPhuke/Music-Player" target="_blank">
                Source Code
              </a>
            </button>
            <button>
              <a href="https://premanandphuke.github.io/Music-Player/" target="_blank">
                Live Preview
              </a>
            </button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element -1"
          iconStyle={{ background: "#000", color: "#fff" }}
          contentStyle={{
            background: "#000",
            color: "#fff",

            border: "1px solid white",
          }}
          icon={<ShoppingCartIcon style={{ background: "transparent" }} />}
          
        >
          <div className="first">
            <h2>SwagOfIndia</h2>
            <p>
              An online clothing store offering a diverse range of cloths for
              men, women, and children, with easy browsing, ordering, and
              delivery options.. Previous
            </p>
            <button>
              <a href="https://github.com/PremanandPhuke/SwagOfIndia" target="_blank">
                Source Code
              </a>
            </button>
            <button>
              <a href="#" target="_blank">
                Live Preview
              </a>
            </button>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element -1"
          iconStyle={{ background: "#000", color: "#fff" }}
          contentStyle={{
            background: "#000",
            color: "#fff",

            border: "1px solid white",
          }}
          icon={<ExtensionIcon style={{ background: "transparent" }} />}
          
        >
          <div className="first">
            <h2>LinkUp</h2>
            <p>
              Designed and implemented ”Linkup,” a comprehensive social media
              app, employing React.js, SASS for the frontend interface, and
              building a robust backend with Express.js, Node.js, and MySQL.
              Managed the entire development lifecycle, from concept to
              deployment.
            </p>
            <button>
              <a href="https://github.com/PremanandPhuke/LinkUp" target="_blank">
                Source Code
              </a>
            </button>
            <button>
              <a href="#" target="_blank">
                Live Preview
              </a>
            </button>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

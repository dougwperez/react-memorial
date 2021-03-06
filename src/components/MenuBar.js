import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import AboutAlex from "./views/AboutAlex.js";
import PhotoGallery from "./views/PhotoGallery.js";
import Why from "./views/Why.js";
import Resources from "./views/Resources.js";
import YouArePowerful from "./views/YouArePowerful.js";
import KnowDrugs from "./views/KnowDrugs.js";
import { Animated } from "react-animated-css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
      fontSize: 12,
    },
  },
}));

const MenuBar = () => {
  const [state, setState] = useState("home");

  const classes = useStyles();

  const goHome = () => {
    setState("home");
  };

  return (
    <div>
      {/* {state === "home" && (
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          // animationInDuration="5.5"
        >
          <div>hello world </div>
        </Animated>
      )} */}
      <div className="button-container">
        {/* <button className="frosted-glass">Home</button> */}

        <button className="frosted-glass" onClick={() => setState("about")}>
          About Alex
        </button>
        {state === "about" ? <AboutAlex goHome={goHome} /> : null}
        <button
          className="frosted-glass"
          onClick={() => setState("photoGallery")}
        >
          Photos
        </button>
        {state === "photoGallery" ? <PhotoGallery goHome={goHome} /> : null}
        <button className="frosted-glass" onClick={() => setState("why")}>
          Why
        </button>
        {state === "why" ? <Why goHome={goHome} /> : null}
        <button className="frosted-glass" onClick={() => setState("knowDrugs")}>
          Know Drugs
        </button>
        {state === "knowDrugs" ? <KnowDrugs goHome={goHome} /> : null}
        <button
          className="frosted-glass"
          onClick={() => setState("youArePowerful")}
        >
          You Are Powerful
        </button>
        {state === "youArePowerful" ? <YouArePowerful goHome={goHome} /> : null}
        <button className="frosted-glass" onClick={() => setState("resources")}>
          Resources
        </button>
        {state === "resources" ? <Resources goHome={goHome} /> : null}

        <button className="frosted-glass">
          <a target="_blank" href="https://shakenawakedotblog.wordpress.com/">
            Blog
          </a>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;

import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={classes.info}>
            <div className={classes.avatar}>
                <img src="https://avatarfiles.alphacoders.com/115/115811.jpg" />
            </div>
            <div className={classes.about}>
                А это я
            </div>
        </div>
    );
};

export default AboutMe;
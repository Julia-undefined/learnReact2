import React from "react";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <span>
            <img className={classes.avatar} src={props.src} />
            <span className={classes.name}>{props.name}</span>
        </span>
    );
};

export default Avatar;
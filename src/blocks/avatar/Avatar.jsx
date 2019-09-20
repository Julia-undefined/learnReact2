import React from "react";
import classes from "./Avatar.module.css";
console.log("qq");
const Avatar = (props) => {
    return (
        <span>
            <img className={classes.avatar} src={props.src} />
            <span className={classes.name}>{props.name}</span>
        </span>
    );
};

export default Avatar;
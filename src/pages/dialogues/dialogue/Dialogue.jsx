import React from "react";
import classes from "./Dialogue.module.css";
import Avatar from "../../../blocks/avatar/Avatar"


const Dialogue = (props) => {
    return (
        <div className={classes.dialogue}>
            <Avatar src={props.avatar}/>
            <span className={classes.message}>
                {props.message}
            </span>
        </div>
    );
};

export default Dialogue;
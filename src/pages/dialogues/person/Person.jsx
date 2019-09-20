import React from "react";
import classes from "./Person.module.css";
import { NavLink } from "react-router-dom";

const Person = (props) => {
    if (props.path) {
        return (
            <div className={classes.name}>
                <NavLink to={props.path}>{props.name}</NavLink>
            </div>
        )
    } else {
        return (
            <div className={classes.name}>
                {props.name}
            </div>
        )
    }
};

export default Person;
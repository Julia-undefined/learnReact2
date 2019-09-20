import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogues" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <a>News</a>
                </div>
                <div className={classes.item}>
                    <a>Music</a>
                </div>
                <div className={classes.item}>
                    <a>Settings</a>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;

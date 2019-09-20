import React from "react";
import AboutMe from "./aboutMe/AboutMe";
import classes from "./Profile.module.css";
import PostsContainer from "./posts/PostsContainer";

const Main = () => {
    debugger;
    return (
        <div>
            <div className={classes.pic}>
                <img
                    src="https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/01-11/animals-big-cats-leopard-8674.jpg"/>
            </div>
            1111111111
            <AboutMe/>

            222222222222
            <PostsContainer/>
            22
        </div>
    );
};

export default Main;

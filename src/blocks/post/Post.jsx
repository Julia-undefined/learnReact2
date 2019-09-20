import React from "react";
import classes from "./Post.module.css";
import Avatar from "../avatar/Avatar";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <Avatar src="https://наклейкибум.рф/wp-content/uploads/2017/05/13659_0-450x450-250x250.png" />
            {/*<img className={classes.avatar} src="https://наклейкибум.рф/wp-content/uploads/2017/05/13659_0-450x450-250x250.png" />*/}
            <span>{ props.message }</span>
        </div>
    );
};
export default Post;
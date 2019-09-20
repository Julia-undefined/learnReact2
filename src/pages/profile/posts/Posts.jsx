import React from "react";
import classes from "./Posts.module.css";
import Post from "../../../blocks/post/Post"
import Button from "../../../blocks/button/Button"


const Posts = (props) => {
    debugger
    console.log("propspropsprops", props );
    let posts = props.postsData.map(post => <Post message={post.message} />);

    console.log("posts", posts );
    let newPostElement = React.createRef();

    console.log("newPostElement", newPostElement );
    let addPost = () => {
        props.addPost();
    };
    console.log("addPost", addPost );
    let printLetter = () => {
        const areaText = newPostElement.current.value;
        props.printLetter(areaText);
    };

    return (
        <div>
            <h3>My posts</h3>
            <textarea
                ref={newPostElement}
                onChange={ printLetter }
                placeholder="your news..."
                value={props.areaText}
            ></textarea>
            <Button onClick={ addPost } />
            <div className={classes.posts}>
                { posts }
            </div>
        </div>
    );
};

export default Posts;
import React from "react";
import { changeAreaTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer"
import Posts from "./Posts";
import { connect } from "react-redux";

debugger
let mapStateToProps = (state) => {
    return {
        "postsData": state.profilePage.posts,
        "areaText": state.profilePage.areaText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        "printLetter": (value) => {
            const action = changeAreaTextActionCreator(value);
            dispatch(action);
        },
        "addPost": () => {
            const action = addPostActionCreator();
            dispatch(action);

        }
    }
};
debugger
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
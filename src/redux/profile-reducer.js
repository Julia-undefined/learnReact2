const CHANGE_AREA_TEXT = "CHANGE-AREA-TEXT";
const ADD_POST = "ADD-POST";

const initialState = {
    posts: [
        {id: 1, message: "First post"},
        {id: 2, message: "Second post"}
    ],
    areaText: ""
};

const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: 3,
                message: state.areaText
            });
            state.areaText = "";
            break;
        case CHANGE_AREA_TEXT:
            state.areaText = action.text || "";
            break;
        default: break;
    }
    return state;
};

export const changeAreaTextActionCreator = (areaText) => ({
    type: CHANGE_AREA_TEXT,
    text: areaText
});

export const addPostActionCreator = () => ({type: ADD_POST});


export default profileReducer;

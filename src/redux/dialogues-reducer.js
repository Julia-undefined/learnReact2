const CHANGE_MESSAGE_AREA_TEXT = "CHANGE-MESSAGE-AREA-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
    dialogues: [
        {
            id: 1,
            message: "Hello",
            avatar: "https://наклейкибум.рф/wp-content/uploads/2017/05/13659_0-450x450-250x250.png"
        },
        {
            id: 2,
            message: "How are you?",
            avatar: "https://наклейкибум.рф/wp-content/uploads/2017/05/13659_0-450x450-250x250.png"
        }
    ],
    people: [
        {id: 1, name: "J"},
        {id: 2, name: "A"},
        {id: 3, name: "B"},
        {id: 4, name: "C"},
        {id: 5, name: "D"}
    ],
    areaText: ""
};

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_AREA_TEXT:
            state.areaText = action.text || "";
            break;
        case ADD_MESSAGE:
            state.dialogues.push({
                id: 3,
                message: state.areaText,
                avatar: "https://наклейкибум.рф/wp-content/uploads/2017/05/13659_0-450x450-250x250.png"
            });
            state.areaText = "";
            break;
        default: break;
    }

    return state;
};


export const changeMessageAreaText = (value) => {
    return {
        type: CHANGE_MESSAGE_AREA_TEXT,
        text: value
    }
};

export const printNewMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export default dialoguesReducer;

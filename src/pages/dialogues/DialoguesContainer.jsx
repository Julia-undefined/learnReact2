import React from "react";
import { changeMessageAreaText, printNewMessageActionCreator } from "../../redux/dialogues-reducer"
import Dialogues from "./Dialogues";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogues: state.dialoguesPage.dialogues,
        people: state.dialoguesPage.people,
        areaText: state.dialoguesPage.areaText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        printLetter: (value) => {
            var action = changeMessageAreaText(value);
            dispatch(action);
        },
        printNewMessage: () => {
            var action = printNewMessageActionCreator();
            dispatch(action);
        }
    };
};

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues);
export default DialoguesContainer;
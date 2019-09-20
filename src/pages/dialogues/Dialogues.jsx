import React from "react";
import classes from "./Dialogues.module.css";
import Person from "./person/Person"
import Dialogue from "./dialogue/Dialogue"

const Dialogues = (props) => {
    let dialogue = props.dialogues.
        map(dialogue => <Dialogue message={dialogue.message} avatar={dialogue.avatar} />);

    let path;
    let person = props.people.
        map(person => {
            path = "/dialogues/" + person.id;
            return <Person name={person.name} path={path} />
        });

    let newMessageElement = React.createRef();

    let printLetter = () => {
        var value = newMessageElement.current.value;
        props.printLetter(value);

    };

    let printNewMessage = () => {
        props.printNewMessage();
    };

    return (
        <div className={classes.dialogues}>
            <div className={classes["dialogue-item"]}>
                { person }
            </div>
            <div className={classes.messages}>
                { dialogue }
            </div>

            <textarea
                ref={newMessageElement}
                onChange={printLetter}
                value={props.areaText}
            >
            </textarea>
            <button onClick={printNewMessage}>sent</button>
        </div>
    );
};
export default Dialogues;
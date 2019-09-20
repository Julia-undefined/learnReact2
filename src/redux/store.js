import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

let store = {
    _state: {
        dialoguesPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: "First post"},
                {id: 2, message: "Second post"}
            ],
            areaText: ""
        }
    },
    rerender() {
        console.log("rerender?");
    },
    subscribe(observer) {
        this.rerender = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) { // { type: ACTION }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);

        this.rerender();
    }
};

window.store = store;
export default store;
const intialState = 0 ;


const changeNum = ( state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "RESET": return "0";
        default: return state;
    }
}
export default changeNum
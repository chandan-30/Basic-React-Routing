import { createStore } from "redux";

const initialState = {
    count: 0
};

function reducer( state = initialState, action ) {
    if ( action.type === 'increment' ){
        
        return {...state, count: state.count + action.payload };
    } else if ( action.type === 'decrement' ){
        return {...state, count: state.count - action.payload };
    }
    else return state;
}

const store = createStore(reducer);

export default store;
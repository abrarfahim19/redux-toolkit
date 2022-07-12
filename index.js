// State
// Action Type, Payload
// Reducer
// Store
const { createStore } = require("redux");

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const RESET = 'RESET';


const counterState = {
    count: 0
};


const increaseCounterAction = () => {
    return {
        type: INCREASE
    };
};

const decreaseCounterAction = () => {
    return {
        type: DECREASE
    };
};

const resetCounterAction = () => {
    return {
        type: RESET
    };
};

const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREASE:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            state;
    }
};

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increaseCounterAction())
store.dispatch(increaseCounterAction())
store.dispatch(increaseCounterAction())
store.dispatch(increaseCounterAction())
store.dispatch(increaseCounterAction())
store.dispatch(decreaseCounterAction())
store.dispatch(decreaseCounterAction())
store.dispatch(resetCounterAction())
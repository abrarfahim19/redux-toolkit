// State Declaration
// Action type,payload
// Reducer
// Store

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';

// State Initialization
const prouductsInitialState = {
    products: ['Sugar', 'Salt'],
    numberOfProduct: 2
}
const cartInitialState = {
    items: ['Apple'],
    numberOfProduct: 1
}

// Action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const getItems = () => {
    return {
        type: GET_ITEMS
    }
}
const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

// Reducer
const productReducer = (state = prouductsInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }

        default:
            return state;
    }
}
const itemReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }

        case ADD_ITEM:
            return {
                products: [...state.items, action.payload],
                numberOfProduct: state.numberOfProduct + 1
            }

        default:
            return state;
    }
}
const rootReducer = combineReducers({
    productR: productReducer,
    itemR: itemReducer
})


// Store
const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getItems())
store.dispatch(addItem("Salmon"))
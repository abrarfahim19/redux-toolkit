// Init
// Action
// Reducer
// Store
// URL = https://jsonplaceholder.typicode.com/todos

const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const thunk = require("redux-thunk").default

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos"

const initialTodos = {
    todos: [],
    isLoading: false,
    error: null
}

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get(TODOS_URL)
            .then(res => {
                const todos = res.data;
                const title = todos.map(todo => todo.title);
                dispatch(getTodosSuccess(title));
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(getTodosFailed(errorMessage))
            })
    }
}


const store = createStore(todosReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchData())
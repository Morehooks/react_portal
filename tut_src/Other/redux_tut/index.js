import {createStore} from 'redux'

//reducer
function counter(state = 0, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

//create store
let store = createStore(counter);

//log store
store.subscribe(() => console.log(store.getState()))

//Dispatcher
store.dispatch({type : 'INCREMENT'})

store.dispatch({ type: 'DECREMENT' })
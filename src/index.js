import {createStore} from 'redux'
import todoApp from './reducers'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    visibilityFilters,
  } from './actions'

let store  = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//initial state
console.log(store.getState());

const unsubscribe = store.subscribe(() => 
    console.log(store.getState())
);

store.dispatch(addTodo('Learn about todos'));
store.dispatch(addTodo('Learn about Redux'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED));

unsubscribe();


import {createStore,combineReducers} from 'redux';


const reducerhot = function reducerhot(state=[],action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "ADD":
            newState.push(action.obj)
            console.log(newState)
            return newState;
        default :
            return newState;
    }
}

const reducers = combineReducers(({
    reducerhot
}))

const store = createStore(reducers);

export default store;
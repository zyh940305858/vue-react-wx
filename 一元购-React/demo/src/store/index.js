import {createStore,combineReducers} from 'redux';


let collectReducer = function collectReducer(state = [],action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "ADD":
            newState.push(action.obj)
            console.log(newState)
            return newState;
        case "SUB":
            let index = newState.findIndex(item=>item.id===action.obj.id);
            newState.splice(index,1);
            return newState;
        default :
            return newState;
    }
}


let reducers = combineReducers({
    collectReducer
})

const store = createStore(reducers);

export default store;
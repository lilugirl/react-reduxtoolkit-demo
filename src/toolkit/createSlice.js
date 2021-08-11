import { createAction,createReducer } from "./";

function createSlice(options){
    const {name,initialState,reducers}=options;
    let actions={}
    let prefixReducers={};
    Object.keys(reducers).forEach(function(key){
        let type=getType(name,key)
        actions[key]=createAction(type)
        prefixReducers[type]=reducers[key]
    });
    let reducer=createReducer(initialState,prefixReducers)
    return {
        actions,
        reducer
    }

}

function getType(slice,actionKey){
    return slice+'/'+actionKey;
}

export default createSlice;
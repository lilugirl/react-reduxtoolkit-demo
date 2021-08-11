
import { configureStore,createSlice,createSelector } from "./toolkit";

const counterSlice1=createSlice({
    name:'counter1',
    initialState:{number:0},
    reducers:{
        add:(state,action)=>state.number+=1,
        minus:(state,action)=>state.number-=1
    }
})

const counterSlice2=createSlice({
    name:'counter2',
    initialState:{number:0},
    reducers:{
        add:(state,action)=>state.number+=1,
        minus:(state,action)=>state.number-=1
    }
})

const {actions:actions1,reducer:reducer1}=counterSlice1
const {actions:actions2,reducer:reducer2}=counterSlice2
let store=configureStore({
    reducer:{counter1:reducer1,counter2:reducer2}
})

let valueEle1=document.getElementById('value1');
let valueEle2=document.getElementById('value2');
let sumEle=document.getElementById('sum');
const selectCounter1=state=>state.counter1
const selectCounter2=state=>state.counter2

const totalSelector=createSelector([selectCounter1,selectCounter2],function(counter1,counter2){
    console.log('计算综合');
    return counter1.number+counter2.number
})

function render(){
    valueEle1.innerHTML=store.getState().counter1.number;
    valueEle2.innerHTML=store.getState().counter2.number;
    sumEle.innerHTML=totalSelector(store.getState())
}

render();
store.subscribe(render);

document.getElementById('add1').addEventListener('click',()=>{
    store.dispatch(actions1.add());
})

document.getElementById('add2').addEventListener('click',()=>{
    store.dispatch(actions2.add());
})

document.getElementById('minus1').addEventListener('click',()=>{
    store.dispatch(actions1.minus());
})

document.getElementById('minus2').addEventListener('click',()=>{
    store.dispatch(actions2.minus());
})
import {DONE_TASK,ADD_TASK,DELETE_TASK,UPDATE_TASK} from'./Types';
const initstate=[{id:0,text:"Playing FootBall",done:false},
{id:1,text:"Doing my homework",done:false}];
const Reducer=(state=initstate,action)=>{
    switch(action.type){
        case DELETE_TASK: return state.filter((elt)=>elt.id!== action.payload);
        case ADD_TASK:return [...state,action.payload];
        case UPDATE_TASK: return state.map((elt)=> {
            if(elt.id === action.payload.id)
           {return {...elt,text:action.payload.text}} 
            else {
                return elt;
            }
        });
        case DONE_TASK: return state.map((elt)=>{
            if(elt.id === action.payload && elt.done){
                return {...elt,done:false};
            }
           if (elt.id === action.payload && !elt.done) {
            return {...elt,done:true};
            }
            else{
                return elt;
            }
        })
        default: return state
    }
}
export default Reducer;

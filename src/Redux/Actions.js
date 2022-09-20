import {DONE_TASK,ADD_TASK,DELETE_TASK,UPDATE_TASK} from'./Types';

export const addTask=(task)=>{
    return {type:ADD_TASK,payload:task}
}
export const deleteTask=(id)=>{
    
    return { type:DELETE_TASK,payload:id}
}
export const updateTASK=(id,text)=>{
    return {type:UPDATE_TASK,payload:{id,text}}
}
export const doneTASK=(id)=>{
    return {type:DONE_TASK,payload:id}
}
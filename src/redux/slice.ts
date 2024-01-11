//@ts-nocheck
"use client"
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

const slice=createSlice({
    name:"user",
    initialState,
    reducers:{
        adduser:(state,action)=>{
            console.log(action);
            const data={
                id:nanoid(),
                name:action.payload,
            }
            state.users.push(data);
        },
        removeuser:(state,action)=>{
            const data=state.users.filter((item)=>{
                return item.id !== action.payload
            })
            state.users=data;
        }
    }
});

export const {adduser,removeuser}=slice.actions;
export default slice.reducer;
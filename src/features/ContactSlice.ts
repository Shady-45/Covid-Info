import { PayloadAction, createSlice} from '@reduxjs/toolkit';

import {Contact, InitialState } from '../type';
import { contact } from '../Contact';

const initialState:InitialState = {
    contacts:contact,
    editableStatus:{}
    
   
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        deleteItem:(state,{payload}:PayloadAction<{id:number}>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
        },
        addItem:(state,{payload}:PayloadAction<{fname:string,lname:string,status:string}>) =>{
            state.contacts.push({
                id:state.contacts.length,
                firstName:payload.fname,
                lastName:payload.lname,
                status:payload.status
            })
        } ,
        openEditable:(state,{payload}:PayloadAction<number>)=>{
                    const id = payload
                    state.editableStatus[id] = true
        },
        closeEditable:(state,{payload}:PayloadAction<number>)=>{
            const id = payload
            state.editableStatus[id] =false
},
        editItem:(state , {payload}:PayloadAction<Contact>)=>{
            const {id,firstName,lastName,status} = payload
       const editable= state.contacts.find((item) => item.id  === id)
            if(editable){
                editable.firstName=firstName
                editable.lastName=lastName
                editable.status=status
            }

        }
    }    
})
   
        
    
export const {deleteItem,addItem,editItem,openEditable,closeEditable} = contactSlice.actions

export default contactSlice.reducer
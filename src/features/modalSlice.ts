import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../type";

const initialState:ModalState={
    isOpen:false,
    isEditable:false
}


const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openModal:(state)=>{
            state.isOpen = true
        },
        closeModal:(state)=>{
            state.isOpen = false
        },
        openEditableModal:(state)=>{
            state.isEditable = true
        },
        closeEditableModal:(state)=>{
            state.isEditable = false
        }


    }

})

export const {openModal,closeModal,openEditableModal,closeEditableModal} = modalSlice.actions

export default modalSlice.reducer
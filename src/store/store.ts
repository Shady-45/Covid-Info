import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/ContactSlice";
import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import modalReducer from "../features/modalSlice";


export const store = configureStore({
    reducer:{
contact:contactReducer    ,
modal:modalReducer
}
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType <typeof store.getState>> = useSelector;
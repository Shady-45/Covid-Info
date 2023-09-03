import React from 'react'
import redGif from '../assets/red-2.gif'
import greenGif from '../assets/green-2.gif'
import CreateContact from './CreateContact';
import { deleteItem, openEditable  } from '../features/ContactSlice';

import { Contact } from '../type';
import { useAppDispatch, useAppSelector } from '../store/store';
import {  openModal } from '../features/modalSlice';
import EditContact from './EditContact';

const Contacts = () => {
   
    
    
    const dispatch = useAppDispatch()
   const contacts = useAppSelector(state =>state.contact.contacts)
   const isEditable = useAppSelector(state =>state.modal.isEditable)
   const editableStatus = useAppSelector(state =>state.contact.editableStatus)
   const isOpen = useAppSelector(state => state.modal.isOpen)
   
   
    if(contacts.length < 1){
        return(
            <>
            <div className='w-full'>
             
                {
            isOpen ? <CreateContact/> : null
        }
               
          
        <div className=' flex flex-col items-center gap-4  justify-center w-full  '>
               
            <button onClick={()=>dispatch(openModal())}  className='bg-blue-500 text-white mt-4 px-3 py-2 rounded-md '>Create Contact</button>
        </div>
    
            </div>
        
            </>
        )
    }
    
  return (
    <>
    
    <main className='mx-auto flex flex-col'>
        <h1 className=' text-2xl my-8 text-center font-extrabold'>Covid -19 Contacts</h1>
        <article className='absolute left-[50%] top-[30%]'>
                {
            isOpen && <CreateContact/>
        }
                </article>
        <div className='flex flex-1 flex-col items-center gap-8'>
            <button onClick={()=>dispatch(openModal())}  className='bg-blue-600  text-white h-[2.5rem] w-[9.5rem] border-2 border-bg-blue-700 rounded-md  '>Create Contact</button>
        <section className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-3'>
          
            {
                contacts.map((ite:Contact)=>{
                    
                    const {id,firstName,lastName,status} = ite
                   
                    return(
                        <>
                          {
                        editableStatus[id] && <EditContact contact={ite} />
                    }
                        <article key={id} className=' border-2 p-8 flex flex-col items-start shadow-md '>
                             
                            <div className='flex font-extrabold items-center gap-2'>
                            <h2>Name: {firstName}  </h2>
                            <h3>{lastName}</h3>
                            </div>
                          
                            <div className='flex items-center font-bold gap-2'>
                                Status: 
                            {
                                status === 'Active' ? <img className='h-16' src={greenGif} alt='green' /> : <img className='h-16' alt='red' src={redGif} />
                            }
                            <h1>{
                status}</h1>
                            </div>
                           <div className='flex items-center gap-4'>
                        
                            <button onClick={()=>dispatch(openEditable(id))} className='bg-green-600 text-white h-[2rem] w-[7rem] border-2 border-green-700 rounded-md  '>Edit</button>
                            <button onClick={()=>dispatch(deleteItem({id}))} className='bg-red-600 text-white h-[2rem] w-[7rem] border-2 border-red-700 rounded-md  '>Delete</button>

                           </div>
                        </article>
                        </>
                    )
                })
            }
        </section>
        </div>
    </main>
    </>
  )
}

export default Contacts
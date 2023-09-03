import React,{useState} from 'react'
import { useAppDispatch } from '../store/store'
import { addItem } from '../features/ContactSlice'
import { closeModal } from '../features/modalSlice'

const CreateContact = () => {
  const [fname ,setFname ]= useState<string>('')
  const [lname ,setLname ]= useState<string>('')
  const [status,setStatus] = useState<string>('')
  const dispatch = useAppDispatch()
  const handleSubmit =(e:any)=>{
    e.preventDefault()
  if(fname && lname && status){
    dispatch(addItem({fname:fname,lname:lname,status:status}))
    dispatch(closeModal())
  }
  else{
    alert("Please fill the form")
  }


    
    }
  return (
    <>
 <main className='fixed flex items-center top-0 left-0 bottom-0 right-0 justify-center'>
 <form className='border-2 shadow-lg flex w-[25rem]  flex-col gap-8 bg-white p-8 ' action="">
    <div className='flex flex-1 items-center gap-4'>
    <label htmlFor="first">First Name</label>
    <input className='border-1 shadow-lg focus:border-white border-red-500 '  type="text" autoComplete='off' required onChange={(e)=> setFname(e.target.value)} name="first" id="" />
    </div>
    <div className='flex flex-1 items-center gap-4'>
        
    <label htmlFor="second">Last Name</label>
    <input  className='border-1 shadow-lg border-red-500 ' type="text" name="second" autoComplete='off' required  onChange={(e)=> setLname(e.target.value)} id="" />
        </div>
        <div className='flex flex-1 items-center gap-4'>
        <label htmlFor="">Status</label>
    <div className='flex items-center gap-8'>
  
      <label><input type='radio' onChange={(e)=>setStatus(e.target.value)} name="contacts"  required  value="Active" ></input>Active</label>
     
      <label><input type='radio' name="contacts" onChange={(e)=>setStatus(e.target.value)}  required  value="InActive"  ></input>In-Active</label>
    </div>
        </div>
   
   
    <div className='flex items-center gap-4'>
      <button type='submit' className='bg-red-600 text-white h-[2rem] w-[7rem] border-2 border-red-700 rounded-md  ' onClick={(e)=>{e.preventDefault()
      dispatch(closeModal())
      }}  >Cancel</button>
      <button className='bg-green-600 text-white h-[2rem] w-[7rem] border-2 border-green-800 rounded-md  ' onClick={handleSubmit} id="confirmBtn" type='submit'>Confirm</button>
    </div>
</form>
    </main>  


    </>
  )
}

export default CreateContact
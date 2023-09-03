import React,{useState} from 'react'
import { Contact } from '../type'
import { useAppDispatch } from '../store/store'
import { closeEditable, editItem } from '../features/ContactSlice'

const EditContact:React.FC<{contact:Contact}> = ({contact}) => {
    const dispatch = useAppDispatch()
    const [fname,setFname] = useState<string>(contact.firstName)
    const [lname,setLname] = useState<string>(contact.lastName)
    const [status,setStatus] = useState<string>(contact.status)
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        dispatch(editItem({
            id:contact.id,
            firstName:fname,
            lastName:lname,
            status:status
        }))

        dispatch(closeEditable(contact.id))
    }
  return (
    <>
    
    <form  className='border-2 flex w-[25rem]  absolute left-[40%] flex-col gap-8 bg-white p-8' action="">
    <div className='flex flex-1 items-center gap-4'>
    <label htmlFor="first">First Name</label>
    <input className='border-1 shadow-lg focus:border-white border-red-500 '  type="text" autoComplete='off' required  value={fname} onChange={(e)=>{
        setFname(e.target.value)
    }}  name="first" id="" />
    </div>
    <div className='flex flex-1 items-center gap-4'>
        
    <label htmlFor="second">Last Name</label>
    <input  className='border-1 shadow-lg border-red-500 ' type="text" name="second" autoComplete='off' required  value={lname} onChange={(e)=>{
        setLname(e.target.value)
    }}  id="" />
        </div>
        <div className='flex flex-1 items-center gap-4'>
        <label htmlFor="">Status</label>
    <div className='flex items-center gap-8'>
    <label>
        <input type="radio"  required   id="active" name="contacts"  onChange={(e)=>{
        setStatus(e.target.value)
    }} value='Active'  />
        Active
      </label>
      <label>
        <input type="radio"  required  onChange={(e)=>{
        setStatus(e.target.value)
    }} id="inactive" name="contacts" value='InActive' />
        Inactive
      </label>
    </div>
        </div>
   
   
    <div className='flex items-center gap-4'>
      <button type='submit' onClick={()=>dispatch(closeEditable(contact.id))} className='bg-red-600 text-white h-[2rem] w-[7rem] border-2 border-red-700 rounded-md  '
    >Cancel</button>
      <button onClick={handleSubmit}  className='bg-green-600 text-white h-[2rem] w-[7rem] border-2 border-green-800 rounded-md  '  id="confirmBtn" type='submit'>Confirm</button>
    </div>
</form>
    </>
  )
}

export default EditContact
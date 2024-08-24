import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import Footer from './Footer';
import Navbar from './Navbar';
export default function Todo() {
    const[todo,settodo]=useState('')
    const[todos,settodos]=useState([])
    const[editId,seteditID]=useState()
    const TodoSubmit=()=>{
     if(todo!==''){
      settodos([...todos,{text:todo,id:Date.now(),status:false}])
      settodo('')
     }
     if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, text: todo } : item
      );
      settodos(updatedTodos);
      seteditID(null);
    }}
    const ondeletes=(id)=>{
    settodos(todos.filter((data)=>data.id!==id))
    }

    const oncomplete=(id)=>{
      let completedatas=todos.map((todo)=>{
        if(todo.id===id){
          return({...todo,status:!todo.status})
        }
        return todo
      })
      settodos(completedatas)
    }
    const onEdit=(id)=>{
      const finddata=todos.find((todo)=>
todo.id==id
      )
      settodo(finddata.text)
      seteditID(finddata.id)
    }
  return (
    <div>
      <Navbar/>
<div className="flex justify-center items-center min-h-screen p-4">
  <div className="w-full max-w-lg bg-black rounded-md">
    <div className="flex mb-4 mt-3">
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        className="w-[80%] h-12 p-3 bg-gray-300 text-black rounded-md ml-2"
      />
      <button
        onClick={TodoSubmit}
        className="h-12 px-6 ml-4 bg-green-500 hover:bg-blue-400 text-white rounded-md mr-2"
      >
       {editId?'EDIT':'ADD'} 
      </button>
    </div>
    {todos.length > 0 && (
  <ul className="bg-green-300 p-4 rounded-md">
    {todos.map((item, index) => (
      <li
        key={index}
        className="flex justify-between items-center mb-2 p-2 bg-blue-300 rounded"
      >
        <span className={item.status ? 'line-through text-gray-500' : ''}>{item.text}</span>
        <div className="flex space-x-2">
  <FaRegEdit className="text-blue-500 cursor-pointer text-2xl"onClick={()=>onEdit(item.id)} />
  <IoMdDoneAll className="text-green-500 cursor-pointer text-2xl" onClick={()=>oncomplete(item.id)} />
  <MdDeleteForever className="text-red-500 cursor-pointer text-2xl" onClick={()=>ondeletes(item.id)}/>

</div>

      </li>
    ))}
  </ul>
)}

  </div>
  </div>
  <Footer/>
</div>

  )
}

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addUser,deleteUser,editUser } from './features/Users';



function App() {
  const usersList = useSelector((state)=>state.users.value);
  const dispatch = useDispatch();

  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [newusername,setNewusername] = useState("");
  
  
  return (

    <div className="App">

      <input onChange={(event)=>setName(event.target.value)} type='text' placeholder='Name' />
      <input onChange={(event)=>setUsername(event.target.value)} type='text' placeholder='Username' />
      <button onClick={()=>{dispatch(addUser({
        id:9,
        name,
        username
      }))}} >ADD USER</button>

      
          {
            usersList.map(user=>{
              return(
                <div className='displayUsers'>
                  <div>
                  <h1>{user.name}</h1>
                  <h2>{user.username}</h2>
                  <input onChange={(e)=>setNewusername(e.target.value)} type='text' placeholder='New Username...'/>
                  <button onClick={()=>{dispatch(editUser({id:user.id,username:newusername}))}}>Edit</button>
                  <button onClick={()=>{dispatch(deleteUser({id:user.id}))}} >Delete</button>
                  </div>
                  
                
                </div>
              )
            })
          }

      
    </div>
  );
}

export default App;

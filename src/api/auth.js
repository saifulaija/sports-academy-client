// import {json} from 'react-router-dom'
// save a user to database

import { app } from "../firebase/firebase.config"

export const saveUser = user=>{
      const currentUser = {
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            
      }
      fetch(`http://localhost:5000/users/${user?.email}`,{
            method: 'PUT',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
      })
      .then(res=> res.json())
      .then(data=> console.log(data))
}




// get role
 export const getRole = async email =>{
      const response = await fetch(`http://localhost:5000/role/${email}`)
      const user = await response.json()
      return user?.role
}
 export const getStatus = async email =>{
      const response = await fetch(`http://localhost:5000/role/${email}`)
      const user = await response.json()
      return user?.role
}




export const updateData =(id)=>{
      fetch(`http://localhost:5000/updated-two/${id}`,{
            method:'PATCH'
      })
      .then(res=>res.json())
      .then(data=>{
            console.log(data);
      })
}


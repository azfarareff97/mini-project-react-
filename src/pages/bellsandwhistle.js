import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function BellsAndWhistles() {

   let navigate = useNavigate()

   const [friends, updateFriends] = useState([])

   let apiroot = "http://localhost:4211/"

   useEffect(()=>{
      axios.get(`${apiroot}get/friends`)
         .then((res)=>{
            //console.log(res)
            console.log(res.data)
            updateFriends(res.data)
         })
   },[])

   const renderFriends=()=>{
      return friends.map((friend)=>{
         return(
            <li key={friend._id}>
                {friend.name}:
                   &nbsp;
                   {friend.bells} Bells
                   &nbsp;
                   {friend.whistles} Whistles
                   &nbsp;
                   <button>
                    Update
                   </button>
            </li>
         )
      })
   }

   const goToAddNewPage = ()=>{
      navigate("/addnew")
   }


    return ( 
        <div>
            <h1>Bells &amp; Whistles</h1>
            <br />
            <button onClick={goToAddNewPage}> Add New Friend</button>
            <ol>
               {renderFriends()}
               
            </ol>
        </div>
     );
}

export default BellsAndWhistles;
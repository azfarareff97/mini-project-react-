import React, { useState } from 'react';
import axios from 'axios'

function AddFriend() {


    let navigate = useNavigate ()

    const [friendname, updateFriendName] = useState("")
    const [bells, updateBells] = useState(0)
    const [whistles, updateWhistles] = useState(0)


    const captureFriend =(event)=>{
        console.log(event.target.value)
        updateFriendName(event.target.value)
    }

    const capturBells = (event)=>{
        console.log(event.target.value)
        updateBells(event.target.value)
    }

    const capturWhistles = (event)=>{
        console.log(event.target.value)
        updateWhistles(event.target.value)
    }

    const addFriend =()=>{
        const newFriend = {
            "name": friendname,
            "bells": bells,
            "whistles": whistles
        }
        console.log(newFriend)
        // make a call to api to add new friend
        //send newFriend as a request body

        axios.post(`${apiroot}add/friend`, newFriend)
            .then((respond)=>{
                // console.log(res)
                console.log(res.data)
                navigate("/friends")
            })

    }

    return ( 
        <div>
            <h1>Add friend bells and whistles!!!!</h1>
            <fieldset>
                <legend>Bells &amp; Whistles</legend>
                Friend:
                <input type="text" onChange={captureFriend}/> {friendname}
                <br />
                <br />
                Bells: <input type="number"  /> {bells}
                <br />
                <br />
                Whistles: <input type="number"  /> {whistles}
                <br /><br />
                <button onClick={addFriend}>Add</button>

            </fieldset>
        </div>
     );
}

export default AddFriend;
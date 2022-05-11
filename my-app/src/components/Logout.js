import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { UserLoggedInContext } from "../context/UserLoggedIn";
import { SignedInContext} from "../context/SignedIn"

function Logout(){
    //bring in current user info
    const [currentUser, setCurrentUser] = useContext(UserLoggedInContext)
    //bring in logged in info
    const [loggedIn, setLoggedIn] = useContext(SignedInContext)
    const history = useHistory()
    
    function handleLogOut(){
        if(currentUser.length && loggedIn===true){
            alert("You've logged out!")
            
            setCurrentUser('')
            setLoggedIn(false)
            history.push('/')
          } else{
            alert("You're not logged in!")
            history.push('/signin')
          }
          localStorage.setItem('username','')

    }

    console.log(currentUser)
    console.log(loggedIn)

    return(
        <button type='button' onClick={handleLogOut}>Log Out</button>
    )


}

export default Logout
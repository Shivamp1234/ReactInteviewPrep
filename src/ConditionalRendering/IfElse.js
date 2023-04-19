import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

const IfElse = () => {
    const [user,setUser]=useState(true);
    if(user===true){
        return <Login/>
    }
    else{
        return <Logout/>
    }
}

export default IfElse
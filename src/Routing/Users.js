import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <>
    <h3>Users : </h3>
    <ul>
        <Link to="/users/1">User1</Link>
        <Link to="/users/2">User2</Link>
        <Link to="/users/3">User3</Link>
    </ul>
    </>
  )
}

export default Users
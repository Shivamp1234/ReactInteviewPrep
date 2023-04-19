import React ,{useState}from 'react'

const ControlledComponent = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name is :",name);
        console.log("Email is :",email);
    }
  return (
    <>
    <h3>Controlled Components :</h3>
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default ControlledComponent
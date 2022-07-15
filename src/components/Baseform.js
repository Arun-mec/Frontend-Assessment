import React,{useState} from 'react'
import './Baseform.css'

function Baseform() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('') 
    const [number,setNumber] = useState('') 
    const [country,setCountry] = useState('') 
    const [state,setState] = useState('') 
    const [city,setCity] = useState('') 
    const [message,setMessage] = useState('') 
    const [mailalert,setMailalert] = useState('') 
    const handlesubmit = (e)=>{
      e.preventDefault();
    }
    const emailValidate = () =>{
        const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        if (email_regex.test(email)){
            setMailalert("");
        }else if(!email_regex.test(email)){
            setMailalert("Email id is not valid")
        }   
    }
  return (
    <div className="form" >
        <form onSubmit={handlesubmit}>

        <div className="form-group">
        <label htmlFor="Name">Name</label>
          <input type="text" 
          className="form-control" 
          id="name" 
          value={name} onChange={(e)=>{setName(e.target.value)}} required/>
        </div>

        <div className="form-group">
        <label htmlFor="Email">Email address</label>
          <input type="text" 
          className="form-control" 
          id="email"
          value={email} onChange={(e)=>{setEmail(e.target.value)}} onInput={emailValidate} required/>
        </div>
        <p className="alert">{mailalert}</p>

        <div className="form-group">
        <label htmlFor="number">Number</label>
        <input type="text" 
          className="form-control" 
          id="number" 
          value={number} onChange={(e)=>{setNumber(e.target.value);}} />  
        </div>

        <div className="form-group">
        <label htmlFor="country">Country</label>
        <input type="text" 
          className="form-control" 
          id="country"
          value={country} onChange={(e)=>{setCountry(e.target.value)}} />
        </div>

        <div className="form-group">
        <label htmlFor="state">State</label>
        <input type="text" 
          className="form-control" 
          id="state"
          value={state} onChange={(e)=>{setState(e.target.value)}} />
        </div>

        <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" 
          className="form-control" 
          id="city"
          value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
        </div>

        <div className="form-group">
        <label htmlFor="message">Message</label>
          <input type="text" 
          className="form-control" 
          id="message" 
          value={message} onChange={(e)=>{setMessage(e.target.value)}} />
        </div>
        
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Baseform
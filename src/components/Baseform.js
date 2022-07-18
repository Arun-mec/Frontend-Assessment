import React,{useEffect, useState} from 'react'
import './Baseform.css'
import axios from 'axios'

function Baseform() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('') 
    const [number,setNumber] = useState('') 
    const [country,setCountry] = useState('') 
    const [state,setState] = useState('') 
    const [city,setCity] = useState('') 
    const [message,setMessage] = useState('') 
    const [mailalert,setMailalert] = useState('')
    const [numberalert,setNumberalert] = useState('') 
    const [data,setData] = useState([]) 
    const [getstates,setGetstates] = useState([]) 
    const [getcities,setGetcities] = useState([])

    const handlesubmit = (e)=>{
      e.preventDefault();
    }

    useEffect(() => {
      axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
      .then((res)=> setData(res.data))
      .catch((err)=> console.log(err))
    }, [])
    const countries = [...new Set(data.map((item)=>item.country))].sort();
    const handleCountry = (e)=>{
      setCountry(e.target.value);
      let states = data.filter(data => data.country === e.target.value);
      states = [...new Set(states.map((item)=>item.subcountry))].sort();
      setGetstates(states)
    }
    const handleState = (e)=>{
        setState(e.target.value)
        let cities = data.filter(data => data.subcountry === e.target.value);
        cities = [...new Set(cities.map((item)=>item.name))].sort();
        setGetcities(cities)
    }

    const emailValidate = () =>{
        const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        if (email_regex.test(email)){
            setMailalert("");
        }else if(!email_regex.test(email)){
            setMailalert("Email id is not valid")
        }   
    }
    const numberValidate =(num)=>{
        if (isNaN(num)){
          setNumberalert("Phone number is not valid");
        }else if (!isNaN(num) ){
          setNumberalert("")
        }
    }


  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-12">
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
          value={number} onChange={(e)=>{setNumber(e.target.value);}} onKeyDown={(e)=>{numberValidate(e.target.value)}} />  
        </div>
        <p className="alert">{numberalert}</p>

        <div className="form-group">
        <label htmlFor="country">Country</label>
        <select name="country" className="form-control" onChange={(e)=>handleCountry(e)}>
          <option value="">--Select Country--</option>
          { countries.map( (res,index)=>(
          <option key={index} value={res}>{res}</option>
          ))
          } 
        </select>
        </div>

        <div className="form-group">
        <label htmlFor="state">State</label>
        <select name="state" className="form-control" onChange={(e)=>handleState(e)} >
          <option value="">--Select State--</option>
          { getstates.map( (res,index)=>(
          <option key={index} value={res}>{res}</option>
          ))
          } 
        </select>
        </div>

        <div className="form-group">
        <label htmlFor="city">City</label>
        <select name="city" className="form-control" onChange={(e)=>setCity(e)} >
          <option value="">--Select City--</option>
          { getcities.map( (res,index)=>(
          <option key={index} value={res}>{res}</option>
          ))
          } 
        </select>
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
    </div>
    </div>
    </div>
  )
}

export default Baseform
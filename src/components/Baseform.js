import React,{useState} from 'react'
import './Baseform.css'
import { Country, State, City }  from 'country-state-city';

let countries = Country.getAllCountries()
let states = State.getAllStates()
let cities = City.getAllCities()

function Baseform() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('') 
    const [number,setNumber] = useState('') 
    const [country,setCountry] = useState('') 
    const [countrycode,setCountrycode] = useState('')
    const [phonecode,setPhonecode] = useState('')
    const [state,setState] = useState('') 
    const [city,setCity] = useState('') 
    const [message,setMessage] = useState('') 
    const [mailalert,setMailalert] = useState('') 
    const handlesubmit = (e)=>{
      e.preventDefault();
      // console.log(name);
      // console.log(email);
      // console.log(number);
      // console.log(country);
      // console.log(state);
      // console.log(city);
      // console.log(message);

        
    }
    const emailValidate = () =>{
        const email_regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
        if (email_regex.test(email)){
            setMailalert("");
        }else if(!email_regex.test(email)){
            setMailalert("Email id is not valid")
        }
        else{
            setMailalert("")
        }   
    }
    const getCountrycode = (country) => {
      setCountry(country);
      for (let i = 0; i < countries.length; i++) {
        if (countries[i].name === country) {
          setCountrycode(countries[i].isoCode); 
          setPhonecode(countries[i].phonecode) 
    }}}
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
        <label htmlFor="country">Country</label>
        <select
          className='select'
          placeholder="Country"
          value={country} onChange={(e)=>{getCountrycode(e.target.value)}}>
          <option>--Choose Country--</option>
          {
            countries.map((countryObj)=>{
              return (
                <option>{countryObj.name}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="state">State</label>
        <select
          className='select'
          placeholder="State"
          value={state} onChange={(e)=>{setState(e.target.value)}}>
          <option>--Choose State--</option>
          {
            states.map((stateObj)=>{
              if (stateObj.countryCode === countrycode)
                return (<option>{stateObj.name}</option>)
              return null
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="city">City</label>
        <select
          className='select'
          placeholder="City"
          value={city} onChange={(e)=>{setCity(e.target.value)}} >
          <option>--Choose City--</option>
          {
            cities.map((cityObj)=>{
              if (cityObj.countryCode === countrycode)
                return (<option>{cityObj.name}</option>)
              return null
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="number">Number</label>
        <div>
        <input className="numbercode" type="text" value={phonecode} />
        <input type="text" 
          className="number" 
          id="number" 
          value={number} onChange={(e)=>{setNumber(e.target.value);}} />  
        </div>
        
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
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [id,setId]=useState("");
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[date,setDate]=useState('');
    const[email,setEmail]=useState('');
    const[mobile,setMobile]=useState('');
    const[gender,setGender]=useState('')
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[pincode,setPincode]=useState('');
    const[state,setState]=useState('');
    const[country, setCountry]=useState('');
    const[hobbies, setHobbies]=useState('');
    const [showhide, setShowhide] = useState('')

    const history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const student={id,firstName,lastName,date,email,mobile,gender,address,city,pincode,state,country,hobbies};
        console.log(student);

        fetch(" http://localhost:8000/students" ,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("new student added");
            history("/")
        })
    }
    const checkboxHandle =(e)=>{
      const {value, checked}=e.target
      console.log(`$(value) is $(checked)`)
      if(checked){
        setHobbies([...hobbies, value])
      }else{
        setHobbies(hobbies.filter((e)=>e!==value))
      }
     }
     const  showInput =(e)=>{
      const {value}=e.target
      setShowhide(...showhide,value);
  }

  return (
    <div>
          <form className='form' onSubmit={handleSubmit}>
            <table border="1" style={{marginLeft: "500px",marginTop:"30px"}}>
              <tbody >
              <tr>
                <td>Student ID</td>
                <td><input type="number" onChange={(e)=>setId(e.target.value)}/></td>
              </tr>
              <tr>
                <td>First Name : </td>
                <td><input type="text" name='fname' onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' /></td>
              </tr>
              <tr>
                <td>Last Name :</td>
                <td><input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name'/></td>
              </tr>
              <tr>
                <td>Date of Birth :</td>
                <td><input type="date" onChange={(e)=>setDate(e.target.value)} placeholder='DOB'/></td>
              </tr>
              <tr>
                <td>Email :</td>
                <td><input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/></td>
              </tr>
              <tr>
                <td>Mobile :</td>
                <td><input type="number" onChange={(e)=>setMobile(e.target.value)} placeholder='Mobile number'/></td>
              </tr>
              <tr>
                <td>Gender :</td>
                <td><input type="radio" onChange={(e)=>setGender(e.target.value)} value="MALE" name="mgender" />Male</td>
                <td><input type="radio" onChange={(e)=>setGender(e.target.value)} value="FEMALE" name="fgender" />Female </td>
              </tr>
              <tr>
                <td>Address :</td>
                <td><textarea type="text" onChange={(e)=>setAddress(e.target.value)} placeholder='Address'/></td>
              </tr>
              <tr>
                <td>City :</td>
                <td><input type="text" onChange={(e)=>setCity(e.target.value)} placeholder='city'/></td>
              </tr>
              <tr>
                <td>Pincode :</td>
                <td><input type="number" onChange={(e)=>setPincode(e.target.value)} placeholder='Pin code'/></td>
              </tr>
              <tr>
                <td>State :</td>
                <td><input type="text" onChange={(e)=>setState(e.target.value)} placeholder='state'/></td>
              </tr>
              <tr>
                <td>Country :</td>
                <td><input type="text" onChange={(e)=>setCountry(e.target.value)} placeholder='country'/></td>
              </tr>
              <tr>
                <td>     
                <div className="title-name">   
                <label for="Hobbies" >Hobbies:</label><br/>
                <input type="checkbox" style={{marginLeft:"100px"}} onChange={checkboxHandle} value="singing" />
                <label for="singing">Singing  </label><br/>
                <input type="checkbox"  style={{marginLeft:"100px"}} onChange={checkboxHandle} value="dancing"/>
                <label for="dancing">Dancing  </label><br/>
                <input type="checkbox"  style={{marginLeft:"100px"}} onChange={checkboxHandle} value="drawing"/>
                <label for="drawing">Drawing  </label><br/>
                <input type="checkbox"  style={{marginLeft:"100px"}} onClick={showInput} value="other"/>
                <label for="other">Other</label>
                </div>
               {
                   showhide === 'other' && (
                  <input type="text" onChange={checkboxHandle}/>
                 )
              }
             
             </td>
            </tr>
            </tbody>
            </table>
            <br></br>
    <button type='submit'>Submit</button>
  </form>
    </div>
  )
}

export default AddStudent

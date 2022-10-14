import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'
import "./student.css"


const StudentDetails = () => {
    const history=useNavigate();
    const { id }=useParams()
    const {data:students}=useFetch("http://localhost:8000/students/" + id);

    const handleDelete=()=>{
      fetch("http://localhost:8000/students/" + students.id,{
        method:"DELETE"
      }).then(()=>{
          history("/")
      })
    }
   
    const handleUpdate=()=>{
      fetch(`http://localhost:8000/students/${students.id}`  + students.id,{
        method:"PUT",
        body: JSON.stringify({...students,updated : new students()})
      }).then(()=>{
          history("/")
      })
    }

  return (
  
    <div >
        <h1>Welcome User</h1>
      <h2>Student Details-{id}</h2>  
      {students && (
        <div>
          <table border="1" style={{marginLeft: "550px",marginTop:"30px"}}>
            <tr>
              <th>First Name:</th>
              <td>{students.firstName}</td>
            </tr>
            <tr>
              <th>Last Name:</th>
              <td>{students.lastName}</td>
            </tr>
            <tr>
              <th>Date of Birth:</th>
              <td>{students.date}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{students.email}</td>
            </tr>
            <tr>
              <th>Mobile:</th>
              <td>{students.mobile}</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>{students.gender}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>{students.address}</td>
            </tr>
            <tr>
              <th>City:</th>
              <td>{students.city}</td>
            </tr>
            <tr>
              <th>Pincode:</th>
              <td>{students.pincode}</td>
            </tr>
            <tr>
              <th>State:</th>
              <td>{students.state}</td>
            </tr>
            <tr>
              <th>Country:</th>
              <td>{students.country}</td>
            </tr>
            <tr>
              <th>Hobbies: </th>
              <td>{students.hobbies}</td>
            </tr>
          </table>
         
        </div>
      )}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default StudentDetails

import { Link } from "react-router-dom"

const StudentList=({students,title})=>{
    // const employees=props.employees;
    // const title=props.title;

    return( 
        <div className="stu-list">
            <h1>{title}</h1>
               {students.map((student)=>{
                return(
                <div  key={student.id}>
             <Link className="map1" to={`/students/${student.id}`}>
                <form >
                <table style={{color:"red", textAlign:"center" ,margin:"auto"}} border="1">
                <tbody >
                 <tr>
                    <td>
                    <h2 >First Name : {student.firstName}</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h2 >Last Name : {student.lastName}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Date Of Birth: {student.date}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Eamil : {student.email}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Mobile : {student.mobile}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Gender : {student.gender}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Address : {student.address}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >City : {student.city}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Pin code : {student.pincode}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >State : {student.state}</h2>
                    </td>
                </tr>     
                <tr>
                    <td>
                    <h2 >Country :{student.country}</h2>
                    </td>
                </tr>     
                
                <tr>
                    <td>
                    <h2 >Hobbies :{student.hobbies}</h2>
                    </td>
                </tr>   
                </tbody>  
                </table>
                </form>
                <br></br>
               </Link>
            </div>
      )}
      )}
        </div>
    )
}
export default StudentList
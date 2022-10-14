import StudentList from './StudentList';
import useFetch from './useFetch';

const Home = () => {
  const {data:students,isPending,err}=useFetch("  http://localhost:8000/students")
 

  return (
    <div className='App'>
      {isPending && <div>Loading , please wait!</div>}
  {students && <StudentList students={students} border="1" title="students CRUD!"/>}
  {err && <div>failed to fech</div>}
    </div>
  )
}

export default Home

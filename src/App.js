import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter,Routes, Route ,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <div className='link' >
        <Link to="/" >Home</Link>
        <Link to="/create" className='sudheer' style={{marginLeft:"40px"}}>New Student</Link>
        </div>
        <Routes >
        <Route path="/" element={<Home/>}/>  
        <Route path="/Students/:id" element={<StudentDetails/>}/>
        <Route path="/create" element={<AddStudent/>}/>

        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

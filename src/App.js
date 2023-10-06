import Login from "./components/Login/Login";
// import Transferdata from "./components/Transferdata";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Course from './components/Course/Course'
import Logindata from './components/Login/Logindata';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/Ldata'} element={<Logindata/>}></Route>
        <Route path={'/course'} element={<Course/>}></Route>
        </Routes>
        </BrowserRouter>
    {/* <Transferdata username="fahad" password="pswrd" usertype="admin"/> */}
    {/* <Login>

    </Login> */}
    {/* <Course/> */}
    </div>
  );
}

export default App;


import Home from '../Home/Home';
import Login from '../Login/Login';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='Login' element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

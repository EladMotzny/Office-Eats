import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Orders from './Components/Orders';
import Outs from './Components/Outs';

function App() {

  
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleRegisterClick = () => {
    setIsShowRegister((isShowRegister) => !isShowRegister)
  }
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Navbar handleRegisterClick = { handleRegisterClick }
              handleLoginClick = { handleLoginClick }
              isShowRegister={isShowRegister}
              isShowLogin={isShowLogin}/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/order" element={<Orders />}/>
        <Route path="/out" element={<Outs />}/>
      </Routes>
    </div>
  );
}

export default App;

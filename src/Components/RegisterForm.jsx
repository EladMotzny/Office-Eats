import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ isShowRegister }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate('/main')
  }
  
  return (
    <div className={`${!isShowRegister ? "active" : ""} show`}>
      <div className="form-container">
        <div className="form-box solid">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="form-text"> Register </h1>
            <label htmlFor="">Email</label>
            <input type="email" name="email" className="form-box" />
            <br />
            <label htmlFor="">Name</label>
            <input type="text" name="name" className="form-box" />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name="password" className="register-box" />
            <br />
            <input type="submit" value="Register" className="register-btn"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
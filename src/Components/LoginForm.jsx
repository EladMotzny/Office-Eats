import React from 'react'
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ isShowLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    navigate('/main')
  }

  return ( 
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="form-container">
        <div className="form-box solid">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="form-text"> Login </h1>
            <label htmlFor="">Email</label>
            <input type="email" name="email" className="form-box" />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="" className="form-box" />
            <br />
            <input type="submit" value="login" className="form-btn"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
import React from 'react'
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const Navbar = ({ handleRegisterClick, handleLoginClick, isShowLogin, isShowRegister }) => {

    const handleRegClick = () => {
        handleRegisterClick();
    }
    const handleLogClick = () => {
        handleLoginClick();
    }

    return (
        <div className="navbar">
            <div className='container'>
                <h1>Welcome to Office-Eats!</h1>
                <div className='container-buttons'>
                    <button onClick={handleRegClick} className="registericon"> Register </button>
                    <RegisterForm isShowRegister={isShowRegister} />
                    <button onClick={handleLogClick} className="loginicon"> Login </button>
                    <LoginForm isShowLogin={isShowLogin} />
                </div>
            </div>
        </div>
    );
}

export default Navbar
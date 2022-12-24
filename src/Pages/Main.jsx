import React from 'react'
import { useNavigate } from 'react-router-dom';


const Main = () => {

  const navigate = useNavigate();

  const navigateOut = () => {
    navigate('/out')
  }

  const navigateOrder = () => {
    navigate('/order')
  }

  return (
    <div>
        <h1>What would you like to do today?</h1>
        <div className="button-container">
          <button onClick={navigateOut}>Eat Out</button>
          <button onClick={navigateOrder}>Order In</button>
        </div>
    </div>
  )
}

export default Main
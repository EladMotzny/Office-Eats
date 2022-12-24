import React from 'react'

const Out = (resturants) => {
  return (
    <div className='inout-small-container'>
        {resturants.resturants.length >0 ? (<>
        <section className='resturants-section'>
          <div className='resturants-container'>
            {resturants.resturants.map((res) => (
              <div className='info-container'>
                <h3><span role="img" aria-label='resturant'>🍽</span> {res[0]}</h3> 
                <h3><span role="img" aria-label='time'>🕰</span> {res[1]}</h3>
                <h3><span role="img" aria-label='with'>🧍‍♀️🧍🧍‍♂️</span> {res[2]}</h3>
              </div>
            ))}
          </div>
          </section>
          </>) : 
          (<div className='resturants-nothing'>
            <h1>Nothing yet</h1>
          </div>)}
    </div>
  )
}

export default Out
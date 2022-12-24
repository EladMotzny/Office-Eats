import React from 'react'
import Order from './Order'

const Orders = (orders) => {
  return (
    <div className='inout-container'>
        <h1>People want to order from...</h1>
        {orders.length >0 ?
        (<>
           {orders.map((order) => (
            <Order key={order.id} order={order}/>
           ))}
        </>) : 
        (<div>
            <h3>Nothing yet</h3>
        </div>)
        }
    </div>
  )
}

export default Orders
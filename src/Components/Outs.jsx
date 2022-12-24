import React from 'react'
import Out from './Out'
import { useState } from 'react'
import AddOutForm from './AddOutForm';

//once db is ready do useEffect with fetch to get the data itself



const Outs = () => {

    const [isShowForm, setIsShowForm] = useState(false);
    const [resturants, setResturants] = useState([]);

    const handleShowForm = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }

    const addResturant = (newResturant) => {
        setResturants(resturants => [...resturants, newResturant])
    } 

    return (
        <div className='inout-container'>
            <h1>People want to eat at...</h1>
            <br />
            <div className="container-buttons">
                <button className='add-out-btn' onClick={handleShowForm}>+</button>
            </div>
            <div className='add-out-form'>
                <AddOutForm isShowForm={isShowForm}
                            addResturant={addResturant}/>
            </div>
            <br />
            <div>
                <Out resturants={resturants} />
            </div>
        </div>
      )
}

export default Outs
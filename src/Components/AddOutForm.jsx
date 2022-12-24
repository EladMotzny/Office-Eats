import React from 'react'

const AddOutForm = ({isShowForm, addResturant}) => {

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const temp = [event.target.resturant_name.value,
            event.target.time.value,
            event.target.participents.value]
        addResturant(temp);
        isShowForm = false;
    }

  return (
    <div className={`${!isShowForm ? "active" : ""} show`}>
        <div className="form-container">
        <div className="form-box solid">
          <form action="" onSubmit={handleSubmitForm}>
            <h1 className="form-text"> Where do you want to eat? </h1>
            <label htmlFor="">Resturant Name</label>
            <input type="text" name="resturant_name" className="form-box" />
            <br />
            <label htmlFor="">Time</label>
            <input type="time" name="time" className="form-box" />
            <br />
            <label htmlFor="">Participents</label>
            <input type="text" name="participents" className="form-box" />
            <br />
            <input type="submit" value="Submit" className="form-btn"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddOutForm
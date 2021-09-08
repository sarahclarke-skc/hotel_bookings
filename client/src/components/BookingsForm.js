import React, {useState} from "react";
import { postBooking } from "../BookingsService";

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) => {

        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }


    const onSubmit = (e) => {
        e.preventDefault();
       setFormData({
           name: e.target.name.value,
           email: e.target.email.value,
           status: e.target.status.value
       })
        postBooking(formData)
        .then((data) => {
            addBooking(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            <div>
                <input type="radio" id="status" name="status" value="true" required/>
                <label htmlFor="status">Checked In:</label>

                <input type="radio" id="status" name="status" value="false"/>
                <label htmlFor="status">Checked Out:</label>
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>
    );
}

export default BookingsForm
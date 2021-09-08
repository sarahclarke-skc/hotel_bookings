import React from "react";
import { deleteBooking } from "../BookingsService";

const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id)
        .then(()=> {
            removeBooking(booking._id);
        })
    }
    return (
        <>
        <h2>Guest Name: {booking.name}</h2>
        <p>Email: {booking.email}</p>
        <p>Checked In:{booking.status}</p>
        <button onClick = {handleDelete} >Delete</button>
        </>
    )
}

export default BookingItem
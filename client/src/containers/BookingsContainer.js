import React, {useState, useEffect} from "react";
import { getBookings } from "../BookingsService";
import BookingsList from "../components/BookingsList";


const BookingsContainer = () => {

    const [hotelBookings, setHotelBookings] = useState([]);
    useEffect (() => {
        getBookings()
        .then((allBookings) => {
            setHotelBookings(allBookings);
        })
    }, [])

    const addBooking = (booking) => {
        const temp = hotelBookings.map(b => b);
        temp.push(booking);
        setHotelBookings(temp)
    }

    const removeBooking = (id) => {
        const temp = hotelBookings.map(b => b);
        const indexToDelete = temp.map(b => b._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setHotelBookings(temp);
    }

    return (
        <>
        <BookingsForm addBooking={addBooking} />
        <BookingsList bookings = {bookings} removeBooking={removeBooking}/>
        </>
    )
}

export default BookingsContainer

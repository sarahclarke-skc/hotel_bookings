import React, {useState, useEffect} from "react";
import { getBookings } from "../BookingsService";
import BookingsList from "../components/BookingsList";
import BookingsForm from "../components/BookingsForm";



const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);
    useEffect (() => {
        getBookings()
        .then((allBookings) => {
            setBookings(allBookings);
            console.log(bookings)
        })
    }, [])

    const addBooking = (booking) => {
        const temp = bookings.map(b => b);
        temp.push(booking);
        setBookings(temp)
    }

    const removeBooking = (id) => {
        const temp = bookings.map(b => b);
        const indexToDelete = temp.map(b => b._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setBookings(temp);
    }

    return (
        <>
        <BookingsForm addBooking={addBooking} />
        <BookingsList bookings={bookings} removeBooking={removeBooking}/>
        </>
    )
}

export default BookingsContainer

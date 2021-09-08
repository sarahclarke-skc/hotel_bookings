import React from 'react';


const BookingsList = ({bookings, removeBooking}) => {

    const list = bookings.map((booking) => {
        return <BookingItem booking={booking} key={booking._id} removeBooking={removeBooking} />
    })
    return (
        <>
        {list}
        </>
    )
}
export default BookingsList
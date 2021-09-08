use hotel;
db.dropDatabase();

db.bookings.insertMany([ 
    {
        name: "Ringo Starr",
        email: "ringostarr@gmail.com",
        status: true
    },
    {
        name: "John Lennon",
        email: "johnlennon@gmail.com",
        status: false
    },
    {
        name: "Paul McCartney",
        email: "paulmccartney@gmail.com",
        status: true
    },
    {
        name: "George Harrison",
        email: "georgeharrison@gmail.com",
        status: false
    }
]);
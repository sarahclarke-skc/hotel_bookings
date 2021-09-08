use hotel;
db.dropDatabase();

db.bookings.insertMany([ 
    {
        name: "Ringo Starr",
        email: "ringostarr@gmail.com",
        status: "Yes"
    },
    {
        name: "John Lennon",
        email: "johnlennon@gmail.com",
        status: "No"
    },
    {
        name: "Paul McCartney",
        email: "paulmccartney@gmail.com",
        status: "Yes"
    },
    {
        name: "George Harrison",
        email: "georgeharrison@gmail.com",
        status: "No"
    }
]);
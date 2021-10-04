import React from "react";
import BookingFlight from '../components/bookingFlight';

class BookingFlightContainer extends React.Component{

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            bookings: []
        }

        this.addNewBooking = this.addNewBooking.bind(this);
    }

    // componentDidMount(){
    //     this.getBookingsData();
    // }

    // getMovieData()
    //     fetch("http://localhost:8080/movies")
    //         .then((response) => response.json())
    //         .then(data => this.setState({ movies: data, loaded: true }))
    //         .catch(error => console.log(error))
    // }

    addNewBooking(newBooking){
        fetch("http://localhost:8080/flights/make-booking",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        const updatedBookings = [...this.state.bookings, newBooking];
        this.setState({ bookings: updatedBookings });
    }

    render(){

        return (
            <>
                <h1>Flight Bookings</h1>
                <BookingFlight handleFlightSubmission={this.addNewBooking}/>
                <hr/>
                {/* <MovieList bookings={this.state.bookings}/> */}
            </>
        )
    }

}

export default BookingFlightContainer;
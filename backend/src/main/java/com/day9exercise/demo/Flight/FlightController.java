package com.day9exercise.demo.Flight;

import org.javatuples.Ennead;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping(path = "flights")
public record FlightController(FlightService flightService) {

    @Autowired
    public FlightController {
    }

    @GetMapping("/flightList")
    public List<Flight> getListFlights(){

        return flightService.getListFlights();
    }

    @GetMapping("/userId")
    public ArrayList<Ennead<Integer, String, String, LocalDateTime, LocalDateTime, Integer, LocalDateTime, LocalDateTime, Double>> viewCustomerFlight(@RequestParam int customerId){

        return(flightService.viewCustomerFlight(customerId));
    }

    @PostMapping("/make-booking")
    public void addNewFlight(@RequestBody Flight flight){
        flightService.addNewFlight(flight);
    }

    @PutMapping
    public void updatedFlight(@RequestParam int flightId,
                              @RequestParam (required = false) boolean removeReturnTicket){

        flightService.updateFlight(flightId, removeReturnTicket);
    }






    public void updatedFlight(int customerFlightId) {
        flightService.updateFlight(customerFlightId);
    }

    @DeleteMapping("/byCustomerFlightNumber")
    public void deleteFlightByCustomerFlightNumber(@RequestParam int customerId,
                                                   @RequestParam String customerFlightNumber){
        flightService.deleteCustomerFlightByFlightNumber(customerId, customerFlightNumber);
    }

}

function Flights() {
  function calculateNumberOfFlights(passengers, capacity) {
    let numberOfFlights;
    if (passengers % capacity == 0) {
      numberOfFlights = passengers / capacity;
    } else {
      numberOfFlights = Math.floor(passengers / capacity) + 1;
    }
    return { calculateNumberOfFlights };
  }
}

module.exports = Flights();

"use strict";
(function () {
  function Person(name, surname) {
    if (!name || !surname) {
      throw new Error("Fields name and surname are required");
    }
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }
  function Seat(number, category) {
    category = category || "e";
    number = number || Math.floor(91 * Math.random() + 10);
    if (!["e", "b"].includes(category)) {
      throw new Error("Invalid category input");
    }
    this.number = number;
    this.category = category;
    this.getData = function () {
      return this.number + ", " + this.category.toUpperCase();
    };
  }
  function Passenger(person, seat) {
    if (!person || !(person instanceof Person)) {
      throw new Error("Invalid person input");
    }
    if (!seat || !(seat instanceof Seat)) {
      throw new Error("Invalid seat input");
    }
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
    };
    };
    
  function Flight(relation, date) {
    if (!relation || !date) {
      throw new Error("Fields relation and date are required");
    }
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function (passenger) {
      if (!passenger || !(passenger instanceof Passenger)) {
        throw new Error("Invalid passenger data");
      }
      this.listOfPassengers.push(passenger);
    };
    this.getData = function () {
      var year = this.date.getFullYear();
      var month = this.date.getMonth() + 1;
      var day = this.date.getDate();
      var result =
        "\t" + day + "." + month + "." + year + ", " + this.relation + "\n";
      this.listOfPassengers.forEach(function (passenger) {
        result += "\t\t" + passenger.getData() + "\n";
      });
      return result;
    };
  }
  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function (flight) {
      if (!flight || !(flight instanceof Flight)) {
        throw new Error("Invalid flight data");
      }
      this.listOfFlights.push(flight);
    };
    this.getPassengersNumber = function () {
      var count = 0;
      this.listOfFlights.forEach(function (flight) {
        count += flight.listOfPassengers.length;
      });
      return count;
    };
    this.getData = function () {
      var result =
        "Airport: " +
        this.name +
        ", total passengers: " +
        this.getPassengersNumber() +
        "\n";
      this.listOfFlights.forEach(function (flight) {
        result += flight.getData();
      });
      return result;
    };
  }
  function createFlight(relation, date) {
    return new Flight(relation, date);
  }
  function createPassenger(firstName, lastName, seatNumber, category) {
    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
  }
  //testing
  try {
    var nikolaTesla = new Airport();
    var belgradeParis = createFlight("Belgrade - Paris", "Oct 25 2017");
    var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017");
    var passenger1 = createPassenger("Dario", "Stamenkovic", 67, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 62, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Nikola", "Colovic");
    belgradeParis.addPassenger(passenger1);
    belgradeParis.addPassenger(passenger2);
    barcelonaBelgrade.addPassenger(passenger3);
    barcelonaBelgrade.addPassenger(passenger4);
    nikolaTesla.addFlight(belgradeParis);
    nikolaTesla.addFlight(barcelonaBelgrade);
    console.log(nikolaTesla.getData());
  } catch (error) {
    console.log("Error message:" + error.message);
  }
})();
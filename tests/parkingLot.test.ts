import { AirportFee } from "../src/fee/airport/airportFee"
import { FeeStrategy } from "../src/fee/interface/feeStrategy"
import { MallFee } from "../src/fee/mall/mallFee"
import { StadiumFee } from "../src/fee/stadium/stadiumFee"
import { ParkingLot } from "../src/parkingLot"
import { LargeVehicle } from "../src/vehicle/base/largeVehicle"
import { MediumVehicle } from "../src/vehicle/base/mediumVehicle"
import { SmallVehicle } from "../src/vehicle/base/smallVehicle"
import { Vehicle } from "../src/vehicle/interface/vehicle"

export class ParkingLotTest {

    public testAirportParking() {
        const feeStrategy: FeeStrategy = new AirportFee()
        const airportParkingLot: ParkingLot = new ParkingLot(feeStrategy, 200, 500, 100)

        const motorcycle1: Vehicle = new SmallVehicle()
        motorcycle1.number = `OP44TT0990`
        motorcycle1.name = `Motorcycle`
        const motorcycle1Ticket = airportParkingLot.park(motorcycle1)
        if (motorcycle1Ticket) {
            // for simulation purpose only
            motorcycle1Ticket.subtract(55)
        }

        const motorcycle2: Vehicle = new SmallVehicle()
        motorcycle2.number = `LD25VD8322`
        motorcycle2.name = `Motorcycle`
        const motorcycle2Ticket = airportParkingLot.park(motorcycle2)
        if (motorcycle2Ticket) {
            // for simulation purpose only
            motorcycle2Ticket.subtract(59, 14)
        }

        const motorcycle3: Vehicle = new SmallVehicle()
        motorcycle3.number = `MV89FL2366`
        motorcycle3.name = `Motorcycle`
        const motorcycle3Ticket = airportParkingLot.park(motorcycle3)
        if (motorcycle3Ticket) {
            // for simulation purpose only
            motorcycle3Ticket.subtract(0, 12, 1)
        }

        const car1: Vehicle = new MediumVehicle()
        car1.number = `DE85GY1476`
        car1.name = `Electric SUV`
        const car1Ticket = airportParkingLot.park(car1)
        if (car1Ticket) {
            // for simulation purpose only
            car1Ticket.subtract(50)
        }

        const car2: Vehicle = new MediumVehicle()
        car2.number = `XC86MC6344`
        car2.name = `SUV`
        const car2Ticket = airportParkingLot.park(car2)
        if (car2Ticket) {
            // for simulation purpose only
            car2Ticket.subtract(59, 23)
        }

        const car3: Vehicle = new MediumVehicle()
        car3.number = `RV54VH4365`
        car3.name = `SUV`
        const car3Ticket = airportParkingLot.park(car3)
        if (car3Ticket) {
            // for simulation purpose only
            car3Ticket.subtract(0, 1, 3)
        }

        const motorcycle1Recipt = airportParkingLot.unpark(motorcycle1Ticket.number)
        console.log("motorcycle1Recipt", motorcycle1Recipt)

        const motorcycle2Recipt = airportParkingLot.unpark(motorcycle2Ticket.number)
        console.log("motorcycle2Recipt", motorcycle2Recipt)

        const motorcycle3Recipt = airportParkingLot.unpark(motorcycle3Ticket.number)
        console.log("motorcycle3Recipt", motorcycle3Recipt)

        const car1Recipt = airportParkingLot.unpark(car1Ticket.number)
        console.log("car1Recipt", car1Recipt)

        const car2Recipt = airportParkingLot.unpark(car2Ticket.number)
        console.log("car2Recipt", car2Recipt)

        const car3Recipt = airportParkingLot.unpark(car3Ticket.number)
        console.log("car3Recipt", car3Recipt)

    }

    public testStadiumParking() {
        const feeStrategy: FeeStrategy = new StadiumFee()
        const stadiumParkingLot: ParkingLot = new ParkingLot(feeStrategy, 1000, 1500, 0)

        const motorcycle1: Vehicle = new SmallVehicle()
        motorcycle1.number = `OP44TT0990`
        motorcycle1.name = `Motorcycle`
        const motorcycle1Ticket = stadiumParkingLot.park(motorcycle1)
        if (motorcycle1Ticket) {
            // for simulation purpose only
            motorcycle1Ticket.subtract(40, 3)
        }

        const motorcycle2: Vehicle = new SmallVehicle()
        motorcycle2.number = `LD25VD8322`
        motorcycle2.name = `Motorcycle`
        const motorcycle2Ticket = stadiumParkingLot.park(motorcycle2)
        if (motorcycle2Ticket) {
            // for simulation purpose only
            motorcycle2Ticket.subtract(59, 14)
        }

        const car1: Vehicle = new MediumVehicle()
        car1.number = `DE85GY1476`
        car1.name = `Electric SUV`
        const car1Ticket = stadiumParkingLot.park(car1)
        if (car1Ticket) {
            // for simulation purpose only
            car1Ticket.subtract(30, 11)
        }

        const car2: Vehicle = new MediumVehicle()
        car2.number = `XC86MC6344`
        car2.name = `SUV`
        const car2Ticket = stadiumParkingLot.park(car2)
        if (car2Ticket) {
            // for simulation purpose only
            car2Ticket.subtract(5, 13)
        }

        const motorcycle1Recipt = stadiumParkingLot.unpark(motorcycle1Ticket.number)
        console.log("motorcycle1Recipt", motorcycle1Recipt)

        const motorcycle2Recipt = stadiumParkingLot.unpark(motorcycle2Ticket.number)
        console.log("motorcycle2Recipt", motorcycle2Recipt)

        const car1Recipt = stadiumParkingLot.unpark(car1Ticket.number)
        console.log("car1Recipt", car1Recipt)

        const car2Recipt = stadiumParkingLot.unpark(car2Ticket.number)
        console.log("car2Recipt", car2Recipt)
    }

    public testMallParking_Example1() {
        const feeStrategy: FeeStrategy = new MallFee()
        const mallParkingLot: ParkingLot = new ParkingLot(feeStrategy, 2)

        const motorcycle1: Vehicle = new SmallVehicle()
        motorcycle1.number = `OP44TT0990`
        motorcycle1.name = `Motorcycle`
        const motorcycle1Ticket = mallParkingLot.park(motorcycle1)
        if (motorcycle1Ticket) {
            // for simulation purpose only
            motorcycle1Ticket.subtract(40, 3)
        }

        const scooter1: Vehicle = new SmallVehicle()
        scooter1.number = `DE85GY1476`
        scooter1.name = `Scooter`
        const scooter1Ticket = mallParkingLot.park(scooter1)
        if (scooter1Ticket) {
            // for simulation purpose only
            scooter1Ticket.subtract(56)
        }

        const scooter2: Vehicle = new SmallVehicle()
        scooter2.number = `TR33CV7855`
        scooter2.name = `Scooter`
        const scooter2Ticket = mallParkingLot.park(scooter2)
        if (scooter2Ticket) {
        }

        const scooter1Recipt = mallParkingLot.unpark(scooter1Ticket.number)
        console.log("scooter1Recipt", scooter1Recipt)

        const motorcycle2: Vehicle = new SmallVehicle()
        motorcycle2.number = `OP42TD7563`
        motorcycle2.name = `Motorcycle`
        const motorcycle2Ticket = mallParkingLot.park(motorcycle2)
        if (motorcycle2Ticket) {
        }

        const motorcycle1Recipt = mallParkingLot.unpark(motorcycle1Ticket.number)
        console.log("motorcycle1Recipt", motorcycle1Recipt)
    }

    public testMallParking_Example2() {
        const feeStrategy: FeeStrategy = new MallFee()
        const mallParkingLot: ParkingLot = new ParkingLot(feeStrategy, 100, 80, 10)

        const motorcycle1: Vehicle = new SmallVehicle()
        motorcycle1.number = `OP44TT0990`
        motorcycle1.name = `Motorcycle`
        const motorcycle1Ticket = mallParkingLot.park(motorcycle1)
        if (motorcycle1Ticket) {
            // for simulation purpose only
            motorcycle1Ticket.subtract(30, 3)
        }

        const car1: Vehicle = new MediumVehicle()
        car1.number = `DE85GY1476`
        car1.name = `Car`
        const car1Ticket = mallParkingLot.park(car1)
        if (car1Ticket) {
            // for simulation purpose only
            car1Ticket.subtract(1, 6)
        }

        const truck1: Vehicle = new LargeVehicle()
        truck1.number = `TR33CV7855`
        truck1.name = `Truck`
        const truck1Ticket = mallParkingLot.park(truck1)
        if (truck1Ticket) {
            // for simulation purpose only
            truck1Ticket.subtract(59, 1)
        }

        const motorcycle1Recipt = mallParkingLot.unpark(motorcycle1Ticket.number)
        console.log("motorcycle1Recipt", motorcycle1Recipt)

        const car1Recipt = mallParkingLot.unpark(car1Ticket.number)
        console.log("car1Recipt", car1Recipt)

        const truck1Recipt = mallParkingLot.unpark(truck1Ticket.number)
        console.log("truck1Recipt", truck1Recipt)
    }

}
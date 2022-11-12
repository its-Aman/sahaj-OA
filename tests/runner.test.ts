import { ParkingLotTest } from "./parkingLot.test"
import { RateTest } from "./rate.test"

function rateTestRunner() {
    const rateTest = new RateTest()

    rateTest.checkMallRate()
    rateTest.checkStadiumRate()
    rateTest.checkAirportRate()
}

function mainRunner() {
    const parkinglotTest = new ParkingLotTest()

    console.log("======== testMallParking_Example1 ========")
    parkinglotTest.testMallParking_Example1()

    console.log("======== testMallParking_Example2 ========")
    parkinglotTest.testMallParking_Example2()

    console.log("======== testStadiumParking ========")
    parkinglotTest.testStadiumParking()

    console.log("======== testAirportParking ========")
    parkinglotTest.testAirportParking()
}

console.clear()
mainRunner()
// rateTestRunner()
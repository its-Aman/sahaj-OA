import { AirportFee } from "../src/fee/airport/airportFee"
import { MallFee } from "../src/fee/mall/mallFee"
import { StadiumFee } from "../src/fee/stadium/stadiumFee"
import { VehicleType } from "../src/vehicle/enum/vehicleType"

export class RateTest {
    private mallFee: MallFee
    private stadiumFee: StadiumFee
    private airportFee: AirportFee

    constructor() {
        this.mallFee = new MallFee()
        this.stadiumFee = new StadiumFee()
        this.airportFee = new AirportFee()
    }

    public checkMallRate(): void {
        let rate = 0
        rate = this.mallFee.calculateCost(1, VehicleType.SMALL)
        console.log(`Scooter parked for 56 mins `, rate)

        rate = this.mallFee.calculateCost(4, VehicleType.SMALL)
        console.log(`Motorcycle parked for 3 hours and 40 mins `, rate)
    }

    public checkStadiumRate(): void {
        let rate = 0
        rate = this.stadiumFee.calculateCost(4, VehicleType.SMALL)
        console.log(`Motorcycle parked for 3 hours and 40 mins `, rate)

        rate = this.stadiumFee.calculateCost(15, VehicleType.SMALL)
        console.log(`Motorcycle parked for 14 hours and 59 mins `, rate)

        rate = this.stadiumFee.calculateCost(12, VehicleType.MEDIUM)
        console.log(`Electric SUV parked for 11 hours and 30 mins. `, rate)

        rate = this.stadiumFee.calculateCost(14, VehicleType.MEDIUM)
        console.log(`SUV parked for 13 hours and 5 mins. `, rate)

    }

    public checkAirportRate(): void {
        let rate = 0
        rate = this.airportFee.calculateCost(1, VehicleType.SMALL)
        console.log(`Motorcycle parked for 55 mins `, rate)

        rate = this.airportFee.calculateCost(15, VehicleType.SMALL)
        console.log(`Motorcycle parked for 14 hours and 59 mins `, rate)

        rate = this.airportFee.calculateCost(36, VehicleType.SMALL)
        console.log(`Motorcycle parked for 1 day and 12 hours `, rate)

        rate = this.airportFee.calculateCost(1, VehicleType.MEDIUM)
        console.log(`Car parked for 50 mins `, rate)

        rate = this.airportFee.calculateCost(24, VehicleType.MEDIUM)
        console.log(`SUV parked for 23 hours and 59 mins `, rate)

        rate = this.airportFee.calculateCost(1 + (3 * 24), VehicleType.MEDIUM)
        console.log(`Car parked for 3 days and 1 hour `, rate)

    }

}
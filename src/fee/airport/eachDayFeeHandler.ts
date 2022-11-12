import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { AIRPORT_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class EachDayFeeHandler implements FeeHandler {

    setNext(_handler: FeeHandler): FeeHandler {
        return null
    }

    calc(parkingHours: number, vehicleType: VehicleType): number {
        return Math.ceil(parkingHours / 24) * AIRPORT_FEE_RATE[vehicleType][ParkingInterval.EACHDAY]
    }
}
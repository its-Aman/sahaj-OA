import { VehicleType } from "../../vehicle/enum/vehicleType"
import { MALL_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"
import { FeeHandler } from "../interface/feeHandler"

export class PerHourFlatFeesHandler implements FeeHandler {

    calc(parkingHours: number, vehicleType: VehicleType): number {
        return parkingHours * MALL_FEE_RATE[vehicleType][ParkingInterval.DEFAULT]
    }

    setNext(_handler: FeeHandler): FeeHandler {
        return null
    }

}
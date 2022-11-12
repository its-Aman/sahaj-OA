import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { STADIUM_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class TwelveToInfiniteFeeHandler implements FeeHandler {

    setNext(_handler: FeeHandler): FeeHandler {
        return null
    }

    calc(durationInMinutes: number, vehicleType: VehicleType): number {
        return durationInMinutes * STADIUM_FEE_RATE[vehicleType][ParkingInterval.TWELVE_TO_INFINITE]
    }
}
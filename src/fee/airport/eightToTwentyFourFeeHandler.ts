import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { AIRPORT_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class EightToTwentyFourFeeHandler implements FeeHandler {
    private handler: FeeHandler

    setNext(handler: FeeHandler): FeeHandler {
        return this.handler = handler
    }

    calc(durationInMinutes: number, vehicleType: VehicleType): number {
        let cost = AIRPORT_FEE_RATE[vehicleType][ParkingInterval.EIGHT_TO_TWENTYFOUR]

        const remainingMinutes = durationInMinutes - 24

        if (remainingMinutes > 0)
            return this.handler.calc(durationInMinutes, vehicleType)

        return cost
    }
}
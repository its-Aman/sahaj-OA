import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { STADIUM_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class ZeroToFourFeeHandler implements FeeHandler {
    private handler: FeeHandler

    setNext(handler: FeeHandler): FeeHandler {
        return this.handler = handler
    }

    calc(durationInMinutes: number, vehicleType: VehicleType): number {
        let cost = STADIUM_FEE_RATE[vehicleType][ParkingInterval.ZERO_TO_FOUR]

        const remainingMinutes = durationInMinutes - 4

        if (remainingMinutes > 0)
            cost += this.handler.calc(remainingMinutes, vehicleType)

        return cost
    }
}
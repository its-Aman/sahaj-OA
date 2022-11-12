import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { STADIUM_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class FourToTwelveFeeHandler implements FeeHandler {
    private handler: FeeHandler

    setNext(handler: FeeHandler): FeeHandler {
        return this.handler = handler
    }

    calc(durationInMinutes: number, vehicleType: VehicleType): number {
        let cost = STADIUM_FEE_RATE[vehicleType][ParkingInterval.FOUR_TO_TWELVE]

        const remainingMinutes = durationInMinutes - 8

        if (remainingMinutes > 0)
            cost += this.handler.calc(remainingMinutes, vehicleType)

        return cost
    }
}
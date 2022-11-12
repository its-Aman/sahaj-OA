import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { AIRPORT_FEE_RATE } from "../constant/feeRate"
import { ParkingInterval } from "../enum/parkingInterval"

export class ZeroToOneFeeHandler implements FeeHandler {
    private handler: FeeHandler

    setNext(handler: FeeHandler): FeeHandler {
        return this.handler = handler
    }

    calc(durationInMinutes: number, vehicleType: VehicleType): number {
        let cost = AIRPORT_FEE_RATE[vehicleType][ParkingInterval.ZERO_TO_ONE]

        const remainingMinutes = durationInMinutes - 1

        if (remainingMinutes > 0)
            return this.handler.calc(durationInMinutes, vehicleType)

        return cost
    }
}
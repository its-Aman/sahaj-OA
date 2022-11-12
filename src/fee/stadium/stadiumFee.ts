import { VehicleType } from "../../vehicle/enum/vehicleType"
import { FeeHandler } from "../interface/feeHandler"
import { FeeStrategy } from "../interface/feeStrategy"
import { FourToTwelveFeeHandler } from "./fourToTwelveFeeHandler"
import { TwelveToInfiniteFeeHandler } from "./twelveToInfiniteFeeHandler"
import { ZeroToFourFeeHandler } from "./zeroToFourFeeHandler"

export class StadiumFee implements FeeStrategy {
    private handler: FeeHandler

    constructor() {
        this.handler = new ZeroToFourFeeHandler()

        this.handler.setNext(new FourToTwelveFeeHandler())
            .setNext(new TwelveToInfiniteFeeHandler())
    }

    public calculateCost(durationInHours: number, vehicleType: VehicleType): number {
        return this.handler.calc(durationInHours, vehicleType)
    }

}
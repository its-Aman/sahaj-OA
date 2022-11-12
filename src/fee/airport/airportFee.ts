import { VehicleType } from "../../vehicle/enum/vehicleType"
import { EachDayFeeHandler } from "./eachDayFeeHandler"
import { EightToTwentyFourFeeHandler } from "./eightToTwentyFourFeeHandler"
import { FeeHandler } from "../interface/feeHandler"
import { FeeStrategy } from "../interface/feeStrategy"
import { OneToEightFeeHandler } from "./oneToEightFeeHandler"
import { TwelveToTwentyFourFeeHandler } from "./twelveToTwentyFourFeeHandler"
import { ZeroToOneFeeHandler } from "./zeroToOneFeeHandler"
import { ZeroToTwelveFeeHandler } from "./zeroToTwelveFeeHandler"

export class AirportFee implements FeeStrategy {
    constructor() { }

    public calculateCost(durationInHours: number, vehicleType: VehicleType): number {
        const handler = this.getFeeHandler(vehicleType)
        return handler.calc(durationInHours, vehicleType)
    }

    private getFeeHandler(vehicleType: VehicleType): FeeHandler {
        let handler: FeeHandler = null

        switch (vehicleType) {
            case VehicleType.SMALL:
                handler = new ZeroToOneFeeHandler()

                handler.setNext(new OneToEightFeeHandler())
                    .setNext(new EightToTwentyFourFeeHandler())
                    .setNext(new EachDayFeeHandler())
                break
            case VehicleType.MEDIUM:
                handler = new ZeroToTwelveFeeHandler()

                handler.setNext(new TwelveToTwentyFourFeeHandler())
                    .setNext(new EachDayFeeHandler())
                break

            default:
                console.log("Vehicle Not Allowed!")
                break
        }

        return handler
    }
}
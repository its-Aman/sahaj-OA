import { VehicleType } from "../../vehicle/enum/vehicleType"
import { PerHourFlatFeesHandler } from "./perHourFlatFeeHandler"
import { FeeHandler } from "../interface/feeHandler"
import { FeeStrategy } from "../interface/feeStrategy"

export class MallFee implements FeeStrategy {
    private handler: FeeHandler

    constructor() {
        this.handler = new PerHourFlatFeesHandler()
    }

    public calculateCost(durationInHours: number, vehicleType: VehicleType): number {
        return this.handler.calc(durationInHours, vehicleType)
    }

}   
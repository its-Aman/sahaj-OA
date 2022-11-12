import { VehicleType } from "../../vehicle/enum/vehicleType"

export interface FeeStrategy {
    calculateCost(durationInMinutes: number, vehicleType: VehicleType): number
}
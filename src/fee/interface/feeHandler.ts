import { VehicleType } from "../../vehicle/enum/vehicleType"

export interface FeeHandler {
    setNext(handler: FeeHandler): FeeHandler

    calc(durationInMinutes: number, vehicleType: VehicleType): number
}
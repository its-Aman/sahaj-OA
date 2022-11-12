import { VehicleType } from "../enum/vehicleType"

export interface Vehicle {
    type: VehicleType
    number: string
    name: string
}
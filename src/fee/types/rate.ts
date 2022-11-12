import { ParkingInterval } from "../enum/parkingInterval"
import { VehicleType } from "../../vehicle/enum/vehicleType"

export type Rate = {
    [key in keyof typeof VehicleType]?: { [key in keyof typeof ParkingInterval]?: number }
}

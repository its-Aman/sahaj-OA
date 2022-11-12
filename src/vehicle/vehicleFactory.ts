import { LargeVehicle } from "./base/largeVehicle"
import { MediumVehicle } from "./base/mediumVehicle"
import { SmallVehicle } from "./base/smallVehicle"
import { VehicleType } from "./enum/vehicleType"
import { Vehicle } from "./interface/vehicle"

export class VehicleFactory {
    constructor() { }

    public create(vehicleType: VehicleType): Vehicle {
        let vehicle: Vehicle

        switch (vehicleType) {
            case VehicleType.SMALL:
                vehicle = new SmallVehicle()
                break
            case VehicleType.MEDIUM:
                vehicle = new MediumVehicle()
                break
            case VehicleType.LARGE:
                vehicle = new LargeVehicle()
                break
        }

        return vehicle
    }
}
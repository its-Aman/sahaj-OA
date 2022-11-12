import { VehicleType } from "../enum/vehicleType"
import { Vehicle } from "../interface/vehicle"

export class LargeVehicle implements Vehicle {
    private _name: string
    private _number: string
    private _type: VehicleType = VehicleType.LARGE

    public get type(): VehicleType {
        return this._type
    }

    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    public get number(): string {
        return this._number
    }

    public set number(value: string) {
        this._number = value
    }
}
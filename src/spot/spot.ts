import { Vehicle } from "../vehicle/interface/vehicle"

export class Spot {

    private _vehicle: Vehicle
    private _number: number
    private _entryDate: Date
    private _exitDate: Date

    constructor(number: number) {
        this.number = number
    }

    public get number(): number {
        return this._number
    }

    public set number(value: number) {
        this._number = value
    }

    public get entryTime(): Date {
        return this._entryDate
    }

    public set entryTime(value: Date) {
        this._entryDate = value
    }

    public get exitTime(): Date {
        return this._exitDate
    }

    public set exitTime(value: Date) {
        this._exitDate = value
    }

    public get vehicle(): Vehicle {
        return this._vehicle
    }

    public set vehicle(value: Vehicle) {
        this._vehicle = value
    }

    public park(vehicle: Vehicle): void {
        this.entryTime = new Date()
        this.vehicle = vehicle
    }

    public unPark(): void {
        this.vehicle = null
    }
}
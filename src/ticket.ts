export class Ticket {
    private _number: number
    private _spotNumber: number
    private _entryDateTime: Date

    constructor() { }

    public get number(): number {
        return this._number
    }

    public set number(value: number) {
        this._number = value
    }

    public get spotNumber(): number {
        return this._spotNumber
    }

    public set spotNumber(value: number) {
        this._spotNumber = value
    }

    public get entryDateTime(): Date {
        return this._entryDateTime
    }

    public set entryDateTime(value: Date) {
        this._entryDateTime = value
    }

    // for simulation purpose only
    public subtract(minutes = 0, hours = 0, days = 0) {
        this._entryDateTime.setMinutes(this._entryDateTime.getMinutes() - minutes)
        this._entryDateTime.setHours(this._entryDateTime.getHours() - hours)
        this._entryDateTime.setDate(this._entryDateTime.getDate() - days)
    }

}
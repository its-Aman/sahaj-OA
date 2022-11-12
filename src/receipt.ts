export class Receipt {
    private _number: string
    private _fees: string
    private _duration: string
    private _entryDateTime: string
    private _exitDateTime: string

    public get duration(): string {
        return this._duration
    }

    public set duration(value: string) {
        this._duration = value
    }

    public get number(): string {
        return this._number
    }

    public set number(value: string) {
        this._number = value
    }

    public get fees(): string {
        return this._fees
    }

    public set fees(value: string) {
        this._fees = value
    }

    public get entryDateTime(): string {
        return this._entryDateTime
    }

    public set entryDateTime(value: string) {
        this._entryDateTime = value
    }

    public get exitDateTime(): string {
        return this._exitDateTime
    }

    public set exitDateTime(value: string) {
        this._exitDateTime = value
    }

    constructor() { }
}
import { FeeStrategy } from "./fee/interface/feeStrategy"
import { Receipt } from "./receipt"
import { Spot } from "./spot/spot"
import { Ticket } from "./ticket"
import { Util } from "./util"
import { VehicleType } from "./vehicle/enum/vehicleType"
import { Vehicle } from "./vehicle/interface/vehicle"
import { VehicleFactory } from "./vehicle/vehicleFactory"

export class ParkingLot {
    protected spots: Map<number, Spot>
    protected tickets: Map<number, Ticket> = new Map()

    protected spotCount: { [key in VehicleType]: number }
    protected spotAcquired: { [key in VehicleType]: number }

    protected feeStrategy: FeeStrategy
    protected vehicleFactory: VehicleFactory

    private counter = 0

    constructor(
        feeStrategy: FeeStrategy,
        spotForSmallVehicle = 0,
        spotForMediumVehicle = 0,
        spotForLargeVehicle = 0,
    ) {
        this.spotCount = {
            [VehicleType.SMALL]: spotForSmallVehicle,
            [VehicleType.MEDIUM]: spotForMediumVehicle,
            [VehicleType.LARGE]: spotForLargeVehicle,
        }

        this.spotAcquired = {
            [VehicleType.SMALL]: 0,
            [VehicleType.MEDIUM]: 0,
            [VehicleType.LARGE]: 0,
        }

        this.feeStrategy = feeStrategy
        this.vehicleFactory = new VehicleFactory()
        this.spots = new Map()
    }

    public park(vehicle: Vehicle): Ticket {

        if (this.spotCount[vehicle.type] == 0) {
            console.log("No Parking Allowed for this type of vehicle")
            return null
        }

        if (this.spotAcquired[vehicle.type] == this.spotCount[vehicle.type]) {
            console.log("No Space available.")
            return null
        }

        const spot: Spot = new Spot(++this.counter)

        spot.park(vehicle)
        this.spots.set(this.counter, spot)

        const ticket: Ticket = new Ticket()

        ticket.number = spot.number
        ticket.spotNumber = spot.number
        ticket.entryDateTime = spot.entryTime
        this.spotAcquired[vehicle.type] += 1
        this.tickets.set(ticket.number, ticket)

        return ticket
    }

    public unpark(ticketNumber: number): Receipt {
        const ticket: Ticket = this.tickets.get(ticketNumber)
        const spot: Spot = this.spots.get(ticket.spotNumber)

        if (!spot) {
            console.log("No Vehicle parked")
            return null
        }

        const receipt: Receipt = new Receipt()
        const exitDateTime = new Date(Date.now() - ticket.entryDateTime.getMilliseconds())
        const durationInHours = Util.calculateDurationInMinutes(ticket.entryDateTime)

        receipt.entryDateTime = Util.toDateString(ticket.entryDateTime)
        receipt.exitDateTime = Util.toDateString(exitDateTime)
        receipt.duration = Util.getDuration(ticket.entryDateTime)
        const amount = this.feeStrategy.calculateCost(durationInHours, spot.vehicle.type)

        receipt.number = `R-${ticket.number}`
        receipt.fees = `Rs. ${amount}`

        this.spotAcquired[spot.vehicle.type] -= 1
        this.spots.delete(ticket.spotNumber)
        this.tickets.delete(ticket.number)
        spot.unPark()
        return receipt
    }
}
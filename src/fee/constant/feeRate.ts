import { Rate } from "../types/rate"
import { VehicleType } from "../../vehicle/enum/vehicleType"
import { ParkingInterval } from "../enum/parkingInterval"

export const MALL_FEE_RATE: Rate = {
    [VehicleType.SMALL]: { [ParkingInterval.DEFAULT]: 10 },
    [VehicleType.MEDIUM]: { [ParkingInterval.DEFAULT]: 20 },
    [VehicleType.LARGE]: { [ParkingInterval.DEFAULT]: 50 },
}

export const STADIUM_FEE_RATE: Rate = {
    [VehicleType.SMALL]: {
        [ParkingInterval.ZERO_TO_FOUR]: 30,
        [ParkingInterval.FOUR_TO_TWELVE]: 60,
        [ParkingInterval.TWELVE_TO_INFINITE]: 100,
    },
    [VehicleType.MEDIUM]: {
        [ParkingInterval.ZERO_TO_FOUR]: 60,
        [ParkingInterval.FOUR_TO_TWELVE]: 120,
        [ParkingInterval.TWELVE_TO_INFINITE]: 200,
    },
}

export const AIRPORT_FEE_RATE: Rate = {
    [VehicleType.SMALL]: {
        [ParkingInterval.ZERO_TO_ONE]: 0,
        [ParkingInterval.ONE_TO_EIGHT]: 40,
        [ParkingInterval.EIGHT_TO_TWENTYFOUR]: 60,
        [ParkingInterval.EACHDAY]: 80,
    },
    [VehicleType.MEDIUM]: {
        [ParkingInterval.ZERO_TO_TWELVE]: 60,
        [ParkingInterval.TWELVE_TO_TWENTYFOUR]: 80,
        [ParkingInterval.EACHDAY]: 100,
    },
}
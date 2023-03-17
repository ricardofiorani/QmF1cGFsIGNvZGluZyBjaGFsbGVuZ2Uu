export type UserForm = {
    customer: {
        name: string;
        email: string;
    },
    address: {
        street: string;
        city: string;
    },
}

export type SolarTermalHeathingForm = UserForm & {
    surfaceArea: number;
    numberOfPeople: number;
}

export type HeatPumpForm = UserForm & {
    surfaceArea: number;
    numberOfPeople: number;
}
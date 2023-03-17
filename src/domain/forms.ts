export type FormStructure = {
    fields: {
        [key: string]: {
            type: string;
        }
    }
}

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
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import {UserForm as UserFormType} from "../../../../domain/forms"

@Entity()
export default class UserForm implements UserFormType {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('simple-json')
    address: {
        street: string;
        city: string
    };

    @Column('simple-json')
    customer: {
        name: string;
        email: string
    };

    constructor(
        id: string,
        address: { street: string; city: string; },
        customer: { name: string; email: string; }
    ) {
        this.id = id;
        this.address = address;
        this.customer = customer;
    }
}
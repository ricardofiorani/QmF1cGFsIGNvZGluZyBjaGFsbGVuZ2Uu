import {UserForm} from "../../../domain/forms";

export type ValidationResult = {
    success: true;
} | {
    success: false;
    error: string;
    validationProblems?: {
        [key: string]: string;
    }
}

export default interface UserFormValidator {
    validate(userForm: UserForm): Promise<ValidationResult>;
}
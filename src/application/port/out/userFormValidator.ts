import {UserForm} from "../../../domain/forms";

type ValidationResult = {
    success: true;
} | {
    success: false;
    error: string;
    validationProblems?: {
        [key: string]: string;
    }
}

export default interface userFormValidator {
    validate(userForm: UserForm): Promise<ValidationResult>;
}
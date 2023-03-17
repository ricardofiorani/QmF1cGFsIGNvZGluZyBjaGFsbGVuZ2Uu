import UserFormValidatorInterface, {ValidationResult} from "../../../application/port/out/userFormValidator";
import {UserForm} from "../../../domain/forms";

export default class UserFormValidator implements UserFormValidatorInterface {
    validate(userForm: UserForm): Promise<ValidationResult> {
        // In here we would apply some logic to validate the userForm.
        // Could use zod, yup, some custom database validation, etc...
        // For now I'll just return a success
        return Promise.resolve({
            success: true
        });
    }
}
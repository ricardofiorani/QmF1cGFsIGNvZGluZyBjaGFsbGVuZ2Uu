import UserCaseInterface, {InsertFormOperationResult} from "../port/in/insertUserForm";
import formInserter from "../port/out/insertUserForm";
import {UserForm} from "../../domain/forms";
import FormValidator from "../port/out/userFormValidator";

export default class InsertUserFormUserCase implements UserCaseInterface {

    constructor(private formInserter: formInserter, private formValidator: FormValidator) {
    }

    async insertUserForm(userForm: UserForm): Promise<InsertFormOperationResult> {
        const validation = await this.formValidator.validate(userForm);

        if (!validation.success) {
            return {
                success: false,
                error: validation.error,
                validationProblems: validation.validationProblems
            }
        }

        return await this.formInserter.insertUserForm(userForm);
    }
}
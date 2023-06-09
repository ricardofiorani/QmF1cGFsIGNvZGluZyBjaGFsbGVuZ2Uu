import {UserForm} from "../../../domain/forms";

export type InsertFormOperationResult = {
    success: true;
} | {
    success: false;
    error: string;
    validationProblems?: {
        [key: string]: string;
    }
}

export default interface InsertUserForm {
    insertUserForm(userForm: UserForm): Promise<InsertFormOperationResult>;
}
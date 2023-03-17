import {UserForm} from "../../../domain/forms";

type InsertFormOperationResult = {
    success: true;
} | {
    success: false;
    error: string;
    validationProblems?: {
        [key: string]: string;
    }
}

export interface InsertUserForm {
    insertUserForm(userForm: UserForm): Promise<InsertFormOperationResult>;
}
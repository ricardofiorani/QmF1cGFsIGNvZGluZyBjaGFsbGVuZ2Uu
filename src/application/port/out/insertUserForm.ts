import {UserForm} from "../../../domain/forms";

type InsertFormOperationResult = {
    success: true;
} | {
    success: false;
    error: string;
}

export default interface insertUserForm {
    insertUserForm(userForm: UserForm): Promise<InsertFormOperationResult>;
}
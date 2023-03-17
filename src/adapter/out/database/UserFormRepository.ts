import InsertUserForm, {InsertFormOperationResult} from "../../../application/port/in/insertUserForm";
import {getDataSource} from "./dataSource";
import UserForm from "./entities/UserForm";

export default class UserFormRepository implements InsertUserForm {
    async insertUserForm(userForm: UserForm): Promise<InsertFormOperationResult> {
        const dataSource = await getDataSource();
        const userFormRepository = dataSource.getRepository(UserForm);

        try {
            await userFormRepository.save(userForm);
        } catch (e: any) {
            return {
                success: false,
                error: e.message
            }
        }

        return {
            success: true
        }
    }
}
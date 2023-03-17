import {Request, Response} from "express-serve-static-core";
import UserFormValidator from "../../../out/hardcoded/UserFormValidator";
import InsertUserFormUseCase from "../../../../application/useCase/insertUserForm";
import UserFormRepository from "../../../out/database/UserFormRepository";
import {UserForm} from "../../../../domain/forms";

export const postUserFormHandler = async (req: Request, res: Response) => {
    try {
        const userForm = await req.body.data as UserForm;
        const validator = new UserFormValidator();
        const repository = new UserFormRepository();
        const useCase = new InsertUserFormUseCase(repository, validator);
        const result = await useCase.insertUserForm(userForm);
        //In here we would add some logic for this layer, like, if it fails validation its the users fault the return 400
        // For the sake of simplicity I'm just returning the result
        res.send(result);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
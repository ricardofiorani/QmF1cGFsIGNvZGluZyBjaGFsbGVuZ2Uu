import {Response, Request} from "express-serve-static-core";
import FormStructureGetterAdapter from "../../../../out/hardcoded/FormStructureGetterAdapter";
import GetFormStructureUseCase from "../../../../../application/useCase/getFormStructureUseCase";

export const getUserFormStructureHandler = async (req: Request, res: Response) => {
    try {
        const formStructureGetterAdapter = new FormStructureGetterAdapter();
        const useCase = new GetFormStructureUseCase(formStructureGetterAdapter);
        const formStructure = await useCase.getFormStructure();
        res.send(formStructure);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
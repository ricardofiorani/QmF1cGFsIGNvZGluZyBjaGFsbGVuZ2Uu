import {FormStructureGetter} from "../port/out/formStructureGetter";
import {FormStructure} from "../../domain/forms";
import {GetFormStructure} from "../port/in/getFormStructure";

export default class GetFormStructureUseCase implements GetFormStructure {

    constructor(private formStructureGetter: FormStructureGetter) {
    }

    async getFormStructure(): Promise<FormStructure> {
        return await this.formStructureGetter.getFormStructure();
    }
}
import {FormStructureGetter} from "../../../application/port/out/formStructureGetter";
import {FormStructure} from "../../../domain/forms";

export default class FormStructureGetterAdapter implements FormStructureGetter {
    async getFormStructure(): Promise<FormStructure> {
        return {
            fields: {
                name: {
                    type: "string",
                },
                email: {
                    type: "string",
                }
            },
        };
    }
}
import {FormStructure} from "../../../domain/forms";

export interface FormStructureGetter {
    getFormStructure(): Promise<FormStructure>;
}
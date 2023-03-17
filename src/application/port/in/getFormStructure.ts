import {FormStructure} from "../../../domain/forms";

export interface GetFormStructure {
    getFormStructure(): Promise<FormStructure>;
}
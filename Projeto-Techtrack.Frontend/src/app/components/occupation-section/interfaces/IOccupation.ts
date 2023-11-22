import { ITecnologie } from "./ITecnologie";

export interface IOccupation {
    id?: number;
    name?: string;
    description?: string;
    selector? : string;
    tecnologies: ITecnologie[];
    linkImage?: string;
    }
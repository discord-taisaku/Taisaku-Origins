import Eris from "eris";
import { ITaisakuOptions } from "../types/Options";

export = class TaiskuClient extends Eris.Client {
    constructor(token: string, taisakuOptions?: ITaisakuOptions, erisOptions?: Eris.ClientOptions) {
        super(token, erisOptions);
    }
}
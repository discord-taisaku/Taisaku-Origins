import { Snowflake } from "discord-api-types";

export interface ITaisakuOptions {
    owners?: Snowflake[];
    prefix?: string[];
    logger?: {
        writeFies?: {
            enabled: boolean;
            path?: string;
        }
    }
}
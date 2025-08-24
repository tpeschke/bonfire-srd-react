import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface RudimentInfo extends ChapterInfoBaseObject {
    type: 'rudiments',
    info: RudimentsObject[]
}

export interface RudimentsObject {
    shapes: RudimentTable[],
    origins: RudimentTable[],
    traditions: RudimentTable[],
    animism: RudimentTable[],
    calling: RudimentTable[],
    charm: RudimentTable[],
    glamour: RudimentTable[],
    hexing: RudimentTable[],
    investiture: RudimentTable[],
    occultism: RudimentTable[],
    sortilege: RudimentTable[]
}

export interface RudimentTable {
    rudiment: string,
    number?: number
}
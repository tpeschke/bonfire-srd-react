import { ChapterInfoBaseObject } from "./ChapterInterfaces"

export interface BurdensNInjuriesInfo extends ChapterInfoBaseObject {
    type: 'burdensNInjuries',
    info: BurdensNInjuriesObject[]
}

export interface BurdensNInjuriesObject {
    burdens: BurdenNInjuryTable[],
    injuries: BurdenNInjuryTable[]
}

export interface BurdenNInjuryTable {
    burdenNInjury: string,
    number?: number
}
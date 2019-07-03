import {Daypart} from './daypart';

export class Workingday {
    id: number;
    daydate: string;
    daymonth: string;
    dayyear: string;
    date: string;
    available: boolean;
    dayparts: Daypart[];
}

import { IProductsList } from './IProductsList';
export interface IPhanTrang {
    numberpage:number;
    selectParents: IProductsList[];
    countpage:number;
    namepc:string;
    imgpc:string;
}
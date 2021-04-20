import { IProducts } from './IProducts';
export interface ICollection {
    collectionId:number;
    name:string;
    image:string;
    soft:number;
    active:boolean;
    home:boolean;
    titleMeta:string;
    description:string;
    body:string;
    quantity:number;
    factory:string;
    price:number;
    hot:boolean;
    content:string;
    statusProduct:boolean;
    barCode:string;
    createDate:Date;
    createBy:string;
    item:IProducts[];
}
import { IProducts } from "./IProducts";

export interface IProductCategory {
    productCategorieId:number;
    name:string;
    image:string;
    coverImage:string;
    url:string;
    soft:number;
    active:boolean;
    home:boolean;
    parentId: number;
    titleMeta:string;
    descriptionMeta:string;
    body:string;
    products:IProducts[];
}
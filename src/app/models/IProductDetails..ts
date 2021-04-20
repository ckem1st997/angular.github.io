import { GetSize } from './GetSize';
import { GetColor } from './GetColor';
import { IProducts } from './IProducts';

export interface IProductDetails {
    product: IProducts,
    getColors: GetColor[],
    getSizes:GetSize[]
}

export interface ICart {
    id: string| undefined;
    cartId: string| null;
    productID: number
    price: number
    image: string
    count: number
    size: string
    color: string
    name:string
    dateCreated: Date | undefined
}

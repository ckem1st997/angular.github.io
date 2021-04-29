export interface IUser {
    id: string
    email: string
    password: string
    fullname: string
    address: string
    mobile: string
    createDate: Date
    homePage: string
    active: boolean
    role: string
    confirmEmail: boolean
    token: string
    lockAccount: boolean
}
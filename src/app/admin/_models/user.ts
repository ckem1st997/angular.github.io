import { Role } from "./role";

export class User {
    username: string | undefined;
    password: string | undefined;
    role: Role | undefined;
}
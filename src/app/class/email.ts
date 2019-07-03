import {User} from './user';

export class Email {
    id: number;
    name: string;
    firstname: string;
    address: string;
    object: string;
    message: string;
    treated: boolean;
    user: User;
    rgpd: boolean;

}

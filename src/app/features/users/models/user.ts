import * as faker from 'faker';
import { Base } from '../../props/models/prop';

export interface User extends Base {
    first_name: string;
    last_name: string;
    middle_name: string;
    username: string;
    name: string;
    email: string;
}

export interface UserRole {
    roles: string[];
    user_roles: string[];
}

export const FakerUser: () => User = () => {
    const card = faker.helpers.createCard();
    return {
        sys_id: faker.random.alphaNumeric(20),
        first_name: '',
        last_name: card.name,
        middle_name: faker.name.firstName(),
        username: card.username,
        name: card.name,
        email: card.email,
        sys_updated_on: new Date(),
        sys_created_on: new Date(),
        sys_updated_by: 'admin',
        sys_created_by: 'admin'
    };
};
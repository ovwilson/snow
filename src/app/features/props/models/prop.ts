import * as faker from 'faker';

export interface Base {
    sys_id: string;
    sys_updated_on: Date;
    sys_created_on: Date;
    sys_updated_by: string;
    sys_created_by: string;
}

export interface PropBase extends Base {
    title?: string;
    name?: string;
    description?: string;
    short_description?: string;
    category?: string;
    environment?: 'development' | 'test' | 'production';
}

export interface ResourceMetaData extends Base {
    size_bytes?: number;
    table_name: string;
    table_sys_id: string;
    content_type: string;
    defer: boolean;
    module: boolean;
}

export interface Prop extends PropBase {
    ssr_sys_id: string;
    ssr_uri?: string;
    ssr_file_uri?: string;
    ssr_query?: string;
    ssr_limit?: number;
}

export const FakerProp: () => Prop = () => ({
    sys_id: faker.random.alphaNumeric(),
    title: faker.company.bsNoun(),
    description: faker.company.catchPhrase(),
    short_description: faker.company.catchPhrase(),
    category: faker.company.bsNoun(),
    name: faker.database.type(),
    environment: 'development',
    ssr_sys_id: faker.random.alphaNumeric(),
    ssr_uri: faker.internet.url(),
    ssr_file_uri: faker.internet.url(),
    ssr_query: faker.database.collation(),
    ssr_limit: faker.random.number(2),
    sys_updated_on: new Date(),
    sys_created_on: new Date(),
    sys_updated_by: 'admin',
    sys_created_by: 'admin'
});

export const FakerResource: () => ResourceMetaData = () => ({
    sys_id: faker.random.alphaNumeric(),
    size_bytes: faker.random.number(5),
    name: faker.image.imageUrl(),
    table_name: faker.company.bsAdjective(),
    table_sys_id: faker.random.alphaNumeric(),
    content_type: faker.database.type(),
    defer: faker.random.boolean(),
    module: faker.random.boolean(),
    sys_updated_on: new Date(),
    sys_created_on: new Date(),
    sys_updated_by: 'admin',
    sys_created_by: 'admin'
})
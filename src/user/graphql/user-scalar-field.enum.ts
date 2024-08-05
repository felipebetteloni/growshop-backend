import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    role = "role",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    isPremium = "isPremium",
    isStore = "isStore"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

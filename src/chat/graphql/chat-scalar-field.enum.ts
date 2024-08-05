import { registerEnumType } from '@nestjs/graphql';

export enum ChatScalarFieldEnum {
    id = "id",
    userFromId = "userFromId",
    userToId = "userToId",
    createdAt = "createdAt",
    isActive = "isActive"
}


registerEnumType(ChatScalarFieldEnum, { name: 'ChatScalarFieldEnum', description: undefined })

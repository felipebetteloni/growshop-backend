import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    userId = "userId",
    text = "text",
    createdAt = "createdAt",
    chatId = "chatId"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })

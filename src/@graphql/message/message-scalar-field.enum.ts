import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    userId = "userId",
    chatId = "chatId",
    text = "text",
    imgUrl = "imgUrl",
    createdAt = "createdAt",
    isRead = "isRead"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })

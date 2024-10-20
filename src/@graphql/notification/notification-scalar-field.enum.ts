import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
    id = "id",
    userId = "userId",
    text = "text",
    imgUrl = "imgUrl",
    createdAt = "createdAt",
    isRead = "isRead"
}


registerEnumType(NotificationScalarFieldEnum, { name: 'NotificationScalarFieldEnum', description: undefined })

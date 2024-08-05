import { registerEnumType } from '@nestjs/graphql';

export enum ReplyScalarFieldEnum {
    id = "id",
    commentId = "commentId",
    replyId = "replyId",
    userId = "userId",
    text = "text",
    createdAt = "createdAt",
    isActive = "isActive"
}


registerEnumType(ReplyScalarFieldEnum, { name: 'ReplyScalarFieldEnum', description: undefined })

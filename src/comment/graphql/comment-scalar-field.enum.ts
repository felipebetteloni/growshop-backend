import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    text = "text",
    createdAt = "createdAt",
    isActive = "isActive"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })

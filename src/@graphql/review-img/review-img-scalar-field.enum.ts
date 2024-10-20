import { registerEnumType } from '@nestjs/graphql';

export enum ReviewImgScalarFieldEnum {
    id = "id",
    imgUrl = "imgUrl",
    createdAt = "createdAt",
    reviewId = "reviewId"
}


registerEnumType(ReviewImgScalarFieldEnum, { name: 'ReviewImgScalarFieldEnum', description: undefined })

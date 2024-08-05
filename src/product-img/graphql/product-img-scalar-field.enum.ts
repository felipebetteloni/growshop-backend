import { registerEnumType } from '@nestjs/graphql';

export enum ProductImgScalarFieldEnum {
    id = "id",
    imgUrl = "imgUrl",
    createdAt = "createdAt",
    productId = "productId"
}


registerEnumType(ProductImgScalarFieldEnum, { name: 'ProductImgScalarFieldEnum', description: undefined })

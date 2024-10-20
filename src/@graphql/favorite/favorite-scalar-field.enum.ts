import { registerEnumType } from '@nestjs/graphql';

export enum FavoriteScalarFieldEnum {
    userId = "userId",
    productId = "productId"
}


registerEnumType(FavoriteScalarFieldEnum, { name: 'FavoriteScalarFieldEnum', description: undefined })

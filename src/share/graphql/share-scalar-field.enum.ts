import { registerEnumType } from '@nestjs/graphql';

export enum ShareScalarFieldEnum {
    userId = "userId",
    productId = "productId"
}


registerEnumType(ShareScalarFieldEnum, { name: 'ShareScalarFieldEnum', description: undefined })

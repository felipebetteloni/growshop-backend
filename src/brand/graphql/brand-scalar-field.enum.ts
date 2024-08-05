import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum', description: undefined })

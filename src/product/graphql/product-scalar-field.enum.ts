import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    userId = "userId",
    categoryId = "categoryId",
    sub_categoryId = "sub_categoryId",
    brandId = "brandId",
    name = "name",
    description = "description",
    conditionId = "conditionId",
    price = "price",
    countryId = "countryId",
    stateId = "stateId",
    cityId = "cityId",
    neighbourhoodId = "neighbourhoodId",
    zip_code = "zip_code",
    createdAt = "createdAt",
    approvedAt = "approvedAt",
    updatedAt = "updatedAt",
    isActive = "isActive",
    isPromoted = "isPromoted",
    viewCount = "viewCount"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })

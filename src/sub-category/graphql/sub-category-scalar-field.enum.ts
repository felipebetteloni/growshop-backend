import { registerEnumType } from '@nestjs/graphql';

export enum SubCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categoryId = "categoryId"
}


registerEnumType(SubCategoryScalarFieldEnum, { name: 'SubCategoryScalarFieldEnum', description: undefined })

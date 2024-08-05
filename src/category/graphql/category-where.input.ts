import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../@generated/prisma/string-filter.input';
import { DateTimeFilter } from '../../@generated/prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../../@generated/prisma/date-time-nullable-filter.input';
import { ProductListRelationFilter } from '../../@generated/product/product-list-relation-filter.input';
import { SubCategoryListRelationFilter } from '../../@generated/sub-category/sub-category-list-relation-filter.input';

@InputType()
export class CategoryWhereInput {

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    Product?: ProductListRelationFilter;

    @Field(() => SubCategoryListRelationFilter, {nullable:true})
    SubCategory?: SubCategoryListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class SubCategoryWhereInput {

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    AND?: Array<SubCategoryWhereInput>;

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    OR?: Array<SubCategoryWhereInput>;

    @Field(() => [SubCategoryWhereInput], {nullable:true})
    NOT?: Array<SubCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    Product?: ProductListRelationFilter;
}

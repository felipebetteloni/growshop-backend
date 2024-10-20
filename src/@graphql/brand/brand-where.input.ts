import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class BrandWhereInput {

    @Field(() => [BrandWhereInput], {nullable:true})
    AND?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    OR?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    NOT?: Array<BrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}

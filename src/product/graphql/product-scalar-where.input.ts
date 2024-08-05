import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ProductScalarWhereInput {

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    AND?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    OR?: Array<ProductScalarWhereInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    NOT?: Array<ProductScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sub_categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brandId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    conditionId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    stateId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cityId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    neighbourhoodId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zip_code?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    approvedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPromoted?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    viewCount?: IntNullableFilter;
}

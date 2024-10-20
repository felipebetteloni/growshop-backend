import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SubCategoryScalarWhereInput {

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    AND?: Array<SubCategoryScalarWhereInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    OR?: Array<SubCategoryScalarWhereInput>;

    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<SubCategoryScalarWhereInput>;

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
}

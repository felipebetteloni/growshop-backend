import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sub_categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conditionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    neighbourhoodId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zip_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    approvedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPromoted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewCount?: keyof typeof SortOrder;
}

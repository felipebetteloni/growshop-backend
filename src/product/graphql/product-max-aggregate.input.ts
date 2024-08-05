import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    sub_categoryId?: true;

    @Field(() => Boolean, {nullable:true})
    brandId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    conditionId?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    countryId?: true;

    @Field(() => Boolean, {nullable:true})
    stateId?: true;

    @Field(() => Boolean, {nullable:true})
    cityId?: true;

    @Field(() => Boolean, {nullable:true})
    neighbourhoodId?: true;

    @Field(() => Boolean, {nullable:true})
    zip_code?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    approvedAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    isPromoted?: true;

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;
}

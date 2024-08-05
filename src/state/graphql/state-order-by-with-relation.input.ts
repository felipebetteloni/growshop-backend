import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { CityOrderByRelationAggregateInput } from '../city/city-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class StateOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => CityOrderByRelationAggregateInput, {nullable:true})
    cities?: CityOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;
}

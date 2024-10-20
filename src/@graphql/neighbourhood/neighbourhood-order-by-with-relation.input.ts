import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class NeighbourhoodOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StateOrderByWithRelationInput } from '../state/state-order-by-with-relation.input';
import { NeighbourhoodOrderByRelationAggregateInput } from '../neighbourhood/neighbourhood-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class CityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stateId?: keyof typeof SortOrder;

    @Field(() => StateOrderByWithRelationInput, {nullable:true})
    state?: StateOrderByWithRelationInput;

    @Field(() => NeighbourhoodOrderByRelationAggregateInput, {nullable:true})
    neighbourhood?: NeighbourhoodOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;
}

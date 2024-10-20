import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StateOrderByRelationAggregateInput } from '../state/state-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class CountryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => StateOrderByRelationAggregateInput, {nullable:true})
    states?: StateOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';

@InputType()
export class SubCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    Product?: ProductOrderByRelationAggregateInput;
}

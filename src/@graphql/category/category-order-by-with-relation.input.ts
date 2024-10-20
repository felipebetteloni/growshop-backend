import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { SubCategoryOrderByRelationAggregateInput } from '../sub-category/sub-category-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    Product?: ProductOrderByRelationAggregateInput;

    @Field(() => SubCategoryOrderByRelationAggregateInput, {nullable:true})
    SubCategory?: SubCategoryOrderByRelationAggregateInput;
}

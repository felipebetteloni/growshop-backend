import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductImgCountOrderByAggregateInput } from './product-img-count-order-by-aggregate.input';
import { ProductImgMaxOrderByAggregateInput } from './product-img-max-order-by-aggregate.input';
import { ProductImgMinOrderByAggregateInput } from './product-img-min-order-by-aggregate.input';

@InputType()
export class ProductImgOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imgUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => ProductImgCountOrderByAggregateInput, {nullable:true})
    _count?: ProductImgCountOrderByAggregateInput;

    @Field(() => ProductImgMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductImgMaxOrderByAggregateInput;

    @Field(() => ProductImgMinOrderByAggregateInput, {nullable:true})
    _min?: ProductImgMinOrderByAggregateInput;
}

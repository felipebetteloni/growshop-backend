import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';

@InputType()
export class CommentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => ReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: ReplyOrderByRelationAggregateInput;
}

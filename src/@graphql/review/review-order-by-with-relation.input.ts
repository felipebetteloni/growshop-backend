import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ChatOrderByWithRelationInput } from '../chat/chat-order-by-with-relation.input';
import { ReviewImgOrderByRelationAggregateInput } from '../review-img/review-img-order-by-relation-aggregate.input';

@InputType()
export class ReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ChatOrderByWithRelationInput, {nullable:true})
    chat?: ChatOrderByWithRelationInput;

    @Field(() => ReviewImgOrderByRelationAggregateInput, {nullable:true})
    imgUrls?: ReviewImgOrderByRelationAggregateInput;
}

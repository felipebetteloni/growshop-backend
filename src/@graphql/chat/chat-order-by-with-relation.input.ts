import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';

@InputType()
export class ChatOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userFromId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userToId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    userFrom?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    userTo?: UserOrderByWithRelationInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: ReviewOrderByWithRelationInput;
}

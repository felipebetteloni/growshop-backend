import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { FavoriteOrderByRelationAggregateInput } from '../favorite/favorite-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { ReportOrderByRelationAggregateInput } from '../report/report-order-by-relation-aggregate.input';
import { ChatOrderByRelationAggregateInput } from '../chat/chat-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { ShareOrderByRelationAggregateInput } from '../share/share-order-by-relation-aggregate.input';
import { SubscriptionOrderByRelationAggregateInput } from '../subscription/subscription-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    updatedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isPremium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isStore?: keyof typeof SortOrder;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => FavoriteOrderByRelationAggregateInput, {nullable:true})
    favorites?: FavoriteOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => ReplyOrderByRelationAggregateInput, {nullable:true})
    replies?: ReplyOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => ReportOrderByRelationAggregateInput, {nullable:true})
    reports?: ReportOrderByRelationAggregateInput;

    @Field(() => ChatOrderByRelationAggregateInput, {nullable:true})
    chatsFrom?: ChatOrderByRelationAggregateInput;

    @Field(() => ChatOrderByRelationAggregateInput, {nullable:true})
    chatsTo?: ChatOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => ShareOrderByRelationAggregateInput, {nullable:true})
    shares?: ShareOrderByRelationAggregateInput;

    @Field(() => SubscriptionOrderByRelationAggregateInput, {nullable:true})
    subscriptions?: SubscriptionOrderByRelationAggregateInput;
}

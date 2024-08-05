import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { FavoriteListRelationFilter } from '../favorite/favorite-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { ReportListRelationFilter } from '../report/report-list-relation-filter.input';
import { ChatListRelationFilter } from '../chat/chat-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { ShareListRelationFilter } from '../share/share-list-relation-filter.input';
import { SubscriptionListRelationFilter } from '../subscription/subscription-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isPremium?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isStore?: BoolFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => FavoriteListRelationFilter, {nullable:true})
    favorites?: FavoriteListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => ReportListRelationFilter, {nullable:true})
    reports?: ReportListRelationFilter;

    @Field(() => ChatListRelationFilter, {nullable:true})
    chatsFrom?: ChatListRelationFilter;

    @Field(() => ChatListRelationFilter, {nullable:true})
    chatsTo?: ChatListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;

    @Field(() => ShareListRelationFilter, {nullable:true})
    shares?: ShareListRelationFilter;

    @Field(() => SubscriptionListRelationFilter, {nullable:true})
    subscriptions?: SubscriptionListRelationFilter;
}

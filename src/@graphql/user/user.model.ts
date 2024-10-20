import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Favorite } from '../favorite/favorite.model';
import { Comment } from '../comment/comment.model';
import { Reply } from '../reply/reply.model';
import { Message } from '../message/message.model';
import { Review } from '../review/review.model';
import { Report } from '../report/report.model';
import { Chat } from '../chat/chat.model';
import { Notification } from '../notification/notification.model';
import { Share } from '../share/share.model';
import { Subscription } from '../subscription/subscription.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'USER'})
    role!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPremium!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isStore!: boolean;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [Favorite], {nullable:true})
    favorites?: Array<Favorite>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Report], {nullable:true})
    reports?: Array<Report>;

    @Field(() => [Chat], {nullable:true})
    chatsFrom?: Array<Chat>;

    @Field(() => [Chat], {nullable:true})
    chatsTo?: Array<Chat>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [Share], {nullable:true})
    shares?: Array<Share>;

    @Field(() => [Subscription], {nullable:true})
    subscriptions?: Array<Subscription>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

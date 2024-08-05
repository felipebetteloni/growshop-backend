import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Chat } from '../chat/chat.model';
import { ReviewImg } from '../review-img/review-img.model';
import { ReviewCount } from './review-count.output';

@ObjectType()
export class Review {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    chatId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Chat, {nullable:false})
    chat?: Chat;

    @Field(() => [ReviewImg], {nullable:true})
    imgUrls?: Array<ReviewImg>;

    @Field(() => ReviewCount, {nullable:false})
    _count?: ReviewCount;
}

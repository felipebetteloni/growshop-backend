import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';
import { ReviewImgListRelationFilter } from '../review-img/review-img-list-relation-filter.input';

@InputType()
export class ReviewWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    chatId?: string;

    @Field(() => [ReviewWhereInput], {nullable:true})
    AND?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    OR?: Array<ReviewWhereInput>;

    @Field(() => [ReviewWhereInput], {nullable:true})
    NOT?: Array<ReviewWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;

    @Field(() => ReviewImgListRelationFilter, {nullable:true})
    imgUrls?: ReviewImgListRelationFilter;
}

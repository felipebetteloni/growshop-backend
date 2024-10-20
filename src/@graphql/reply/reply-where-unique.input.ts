import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereInput } from './reply-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { CommentRelationFilter } from '../comment/comment-relation-filter.input';
import { ReplyNullableRelationFilter } from './reply-nullable-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ReplyListRelationFilter } from './reply-list-relation-filter.input';

@InputType()
export class ReplyWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ReplyWhereInput], {nullable:true})
    AND?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    OR?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    NOT?: Array<ReplyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    commentId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    replyId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => CommentRelationFilter, {nullable:true})
    comment?: CommentRelationFilter;

    @Field(() => ReplyNullableRelationFilter, {nullable:true})
    reply?: ReplyNullableRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../../user/user-relation-filter.input';
import { MessageListRelationFilter } from '../../message/message-list-relation-filter.input';
import { ReviewNullableRelationFilter } from '../../review/review-nullable-relation-filter.input';

@InputType()
export class ChatWhereInput {

    @Field(() => [ChatWhereInput], {nullable:true})
    AND?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    OR?: Array<ChatWhereInput>;

    @Field(() => [ChatWhereInput], {nullable:true})
    NOT?: Array<ChatWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userFromId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userToId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    userFrom?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    userTo?: UserRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => ReviewNullableRelationFilter, {nullable:true})
    review?: ReviewNullableRelationFilter;
}

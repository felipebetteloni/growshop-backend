import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ChatRelationFilter } from '../chat/chat-relation-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    chatId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRead?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ChatRelationFilter, {nullable:true})
    chat?: ChatRelationFilter;
}

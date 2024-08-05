import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ReplyScalarWhereInput {

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    AND?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    OR?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}

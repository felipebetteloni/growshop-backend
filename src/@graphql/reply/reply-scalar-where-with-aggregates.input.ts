import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ReplyScalarWhereWithAggregatesInput {

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    commentId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    replyId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;
}

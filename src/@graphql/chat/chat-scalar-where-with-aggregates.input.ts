import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ChatScalarWhereWithAggregatesInput {

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => [ChatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChatScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userFromId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userToId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ChatScalarWhereInput {

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    AND?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    OR?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    NOT?: Array<ChatScalarWhereInput>;

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
}

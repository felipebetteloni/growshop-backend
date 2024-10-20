import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class NotificationScalarWhereInput {

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    AND?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    OR?: Array<NotificationScalarWhereInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imgUrl?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRead?: BoolFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class NotificationWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [NotificationWhereInput], {nullable:true})
    AND?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    OR?: Array<NotificationWhereInput>;

    @Field(() => [NotificationWhereInput], {nullable:true})
    NOT?: Array<NotificationWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}

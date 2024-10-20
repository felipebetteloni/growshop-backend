import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubscriptionsInput } from './user-create-without-subscriptions.input';

@InputType()
export class UserCreateOrConnectWithoutSubscriptionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSubscriptionsInput)
    create!: UserCreateWithoutSubscriptionsInput;
}

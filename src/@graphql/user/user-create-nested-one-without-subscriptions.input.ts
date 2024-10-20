import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubscriptionsInput } from './user-create-without-subscriptions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubscriptionsInput } from './user-create-or-connect-without-subscriptions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSubscriptionsInput {

    @Field(() => UserCreateWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSubscriptionsInput)
    create?: UserCreateWithoutSubscriptionsInput;

    @Field(() => UserCreateOrConnectWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubscriptionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

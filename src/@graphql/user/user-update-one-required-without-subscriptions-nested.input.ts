import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSubscriptionsInput } from './user-create-without-subscriptions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSubscriptionsInput } from './user-create-or-connect-without-subscriptions.input';
import { UserUpsertWithoutSubscriptionsInput } from './user-upsert-without-subscriptions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSubscriptionsInput } from './user-update-to-one-with-where-without-subscriptions.input';

@InputType()
export class UserUpdateOneRequiredWithoutSubscriptionsNestedInput {

    @Field(() => UserCreateWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserCreateWithoutSubscriptionsInput)
    create?: UserCreateWithoutSubscriptionsInput;

    @Field(() => UserCreateOrConnectWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSubscriptionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput;

    @Field(() => UserUpsertWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutSubscriptionsInput)
    upsert?: UserUpsertWithoutSubscriptionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSubscriptionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSubscriptionsInput)
    update?: UserUpdateToOneWithWhereWithoutSubscriptionsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSharesInput } from './user-create-without-shares.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutSharesInput } from './user-create-or-connect-without-shares.input';
import { UserUpsertWithoutSharesInput } from './user-upsert-without-shares.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutSharesInput } from './user-update-to-one-with-where-without-shares.input';

@InputType()
export class UserUpdateOneRequiredWithoutSharesNestedInput {

    @Field(() => UserCreateWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateWithoutSharesInput)
    create?: UserCreateWithoutSharesInput;

    @Field(() => UserCreateOrConnectWithoutSharesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSharesInput)
    connectOrCreate?: UserCreateOrConnectWithoutSharesInput;

    @Field(() => UserUpsertWithoutSharesInput, {nullable:true})
    @Type(() => UserUpsertWithoutSharesInput)
    upsert?: UserUpsertWithoutSharesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutSharesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSharesInput)
    update?: UserUpdateToOneWithWhereWithoutSharesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutProductsInput } from './user-create-or-connect-without-products.input';
import { UserUpsertWithoutProductsInput } from './user-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutProductsInput } from './user-update-to-one-with-where-without-products.input';

@InputType()
export class UserUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => UserCreateWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateWithoutProductsInput)
    create?: UserCreateWithoutProductsInput;

    @Field(() => UserCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProductsInput)
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput;

    @Field(() => UserUpsertWithoutProductsInput, {nullable:true})
    @Type(() => UserUpsertWithoutProductsInput)
    upsert?: UserUpsertWithoutProductsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProductsInput)
    update?: UserUpdateToOneWithWhereWithoutProductsInput;
}

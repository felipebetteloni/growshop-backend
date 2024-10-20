import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProductsInput } from './user-create-without-products.input';

@InputType()
export class UserCreateOrConnectWithoutProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutProductsInput)
    create!: UserCreateWithoutProductsInput;
}

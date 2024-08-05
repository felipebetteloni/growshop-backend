import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReportsInput } from './user-create-or-connect-without-reports.input';
import { UserUpsertWithoutReportsInput } from './user-upsert-without-reports.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReportsInput } from './user-update-to-one-with-where-without-reports.input';

@InputType()
export class UserUpdateOneRequiredWithoutReportsNestedInput {

    @Field(() => UserCreateWithoutReportsInput, {nullable:true})
    @Type(() => UserCreateWithoutReportsInput)
    create?: UserCreateWithoutReportsInput;

    @Field(() => UserCreateOrConnectWithoutReportsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReportsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput;

    @Field(() => UserUpsertWithoutReportsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReportsInput)
    upsert?: UserUpsertWithoutReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReportsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReportsInput)
    update?: UserUpdateToOneWithWhereWithoutReportsInput;
}

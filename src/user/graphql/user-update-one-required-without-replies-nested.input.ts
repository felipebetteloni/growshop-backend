import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRepliesInput } from './user-create-or-connect-without-replies.input';
import { UserUpsertWithoutRepliesInput } from './user-upsert-without-replies.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRepliesInput } from './user-update-to-one-with-where-without-replies.input';

@InputType()
export class UserUpdateOneRequiredWithoutRepliesNestedInput {

    @Field(() => UserCreateWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateWithoutRepliesInput)
    create?: UserCreateWithoutRepliesInput;

    @Field(() => UserCreateOrConnectWithoutRepliesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRepliesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput;

    @Field(() => UserUpsertWithoutRepliesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRepliesInput)
    upsert?: UserUpsertWithoutRepliesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRepliesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRepliesInput)
    update?: UserUpdateToOneWithWhereWithoutRepliesInput;
}

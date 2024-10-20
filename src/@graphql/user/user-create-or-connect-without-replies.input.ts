import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';

@InputType()
export class UserCreateOrConnectWithoutRepliesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRepliesInput, {nullable:false})
    @Type(() => UserCreateWithoutRepliesInput)
    create!: UserCreateWithoutRepliesInput;
}

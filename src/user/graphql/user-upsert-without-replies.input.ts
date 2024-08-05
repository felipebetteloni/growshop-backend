import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutRepliesInput } from './user-update-without-replies.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRepliesInput } from './user-create-without-replies.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutRepliesInput {

    @Field(() => UserUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRepliesInput)
    update!: UserUpdateWithoutRepliesInput;

    @Field(() => UserCreateWithoutRepliesInput, {nullable:false})
    @Type(() => UserCreateWithoutRepliesInput)
    create!: UserCreateWithoutRepliesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

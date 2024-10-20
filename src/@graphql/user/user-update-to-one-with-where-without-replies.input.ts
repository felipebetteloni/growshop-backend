import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutRepliesInput } from './user-update-without-replies.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutRepliesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutRepliesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRepliesInput)
    data!: UserUpdateWithoutRepliesInput;
}

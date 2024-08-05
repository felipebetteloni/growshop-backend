import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedOneWithoutRepliesInput } from '../comment/comment-create-nested-one-without-replies.input';
import { ReplyCreateNestedOneWithoutRepliesInput } from './reply-create-nested-one-without-replies.input';
import { UserCreateNestedOneWithoutRepliesInput } from '../user/user-create-nested-one-without-replies.input';

@InputType()
export class ReplyCreateWithoutRepliesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => CommentCreateNestedOneWithoutRepliesInput, {nullable:false})
    comment!: CommentCreateNestedOneWithoutRepliesInput;

    @Field(() => ReplyCreateNestedOneWithoutRepliesInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutRepliesInput;

    @Field(() => UserCreateNestedOneWithoutRepliesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRepliesInput;
}

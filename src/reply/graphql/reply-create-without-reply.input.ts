import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedOneWithoutRepliesInput } from '../comment/comment-create-nested-one-without-replies.input';
import { UserCreateNestedOneWithoutRepliesInput } from '../user/user-create-nested-one-without-replies.input';
import { ReplyCreateNestedManyWithoutReplyInput } from './reply-create-nested-many-without-reply.input';

@InputType()
export class ReplyCreateWithoutReplyInput {

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

    @Field(() => UserCreateNestedOneWithoutRepliesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutRepliesInput;

    @Field(() => ReplyCreateNestedManyWithoutReplyInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutReplyInput;
}

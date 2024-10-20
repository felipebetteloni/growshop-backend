import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { ReplyCreateNestedManyWithoutCommentInput } from '../reply/reply-create-nested-many-without-comment.input';

@InputType()
export class CommentCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => ReplyCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutCommentInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUncheckedCreateNestedManyWithoutCommentInput } from '../../reply/reply-unchecked-create-nested-many-without-comment.input';

@InputType()
export class CommentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutCommentInput;
}

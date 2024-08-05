import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutCommentsInput } from '../../product/product-create-nested-one-without-comments.input';
import { ReplyCreateNestedManyWithoutCommentInput } from '../../reply/reply-create-nested-many-without-comment.input';

@InputType()
export class CommentCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => ProductCreateNestedOneWithoutCommentsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutCommentsInput;

    @Field(() => ReplyCreateNestedManyWithoutCommentInput, {nullable:true})
    replies?: ReplyCreateNestedManyWithoutCommentInput;
}

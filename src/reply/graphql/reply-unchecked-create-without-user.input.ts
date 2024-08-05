import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyUncheckedCreateNestedManyWithoutReplyInput } from './reply-unchecked-create-nested-many-without-reply.input';

@InputType()
export class ReplyUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:true})
    replyId?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => ReplyUncheckedCreateNestedManyWithoutReplyInput, {nullable:true})
    replies?: ReplyUncheckedCreateNestedManyWithoutReplyInput;
}

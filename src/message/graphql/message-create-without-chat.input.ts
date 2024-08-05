import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMessagesInput } from '../../user/user-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutChatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imgUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => UserCreateNestedOneWithoutMessagesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutMessagesInput;
}

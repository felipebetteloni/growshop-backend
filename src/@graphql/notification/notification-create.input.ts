import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNotificationsInput } from '../user/user-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutNotificationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNotificationsInput;
}

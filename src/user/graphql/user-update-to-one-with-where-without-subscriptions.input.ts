import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutSubscriptionsInput } from './user-update-without-subscriptions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutSubscriptionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubscriptionsInput)
    data!: UserUpdateWithoutSubscriptionsInput;
}

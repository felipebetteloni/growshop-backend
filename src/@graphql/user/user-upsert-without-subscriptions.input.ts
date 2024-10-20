import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutSubscriptionsInput } from './user-update-without-subscriptions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutSubscriptionsInput } from './user-create-without-subscriptions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutSubscriptionsInput {

    @Field(() => UserUpdateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutSubscriptionsInput)
    update!: UserUpdateWithoutSubscriptionsInput;

    @Field(() => UserCreateWithoutSubscriptionsInput, {nullable:false})
    @Type(() => UserCreateWithoutSubscriptionsInput)
    create!: UserCreateWithoutSubscriptionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

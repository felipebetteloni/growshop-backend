import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionType } from '../prisma/subscription-type.enum';
import { UserCreateNestedOneWithoutSubscriptionsInput } from '../user/user-create-nested-one-without-subscriptions.input';

@InputType()
export class SubscriptionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => SubscriptionType, {nullable:true})
    type?: keyof typeof SubscriptionType;

    @Field(() => UserCreateNestedOneWithoutSubscriptionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSubscriptionsInput;
}

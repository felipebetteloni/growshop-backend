import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateManyUserInput } from './subscription-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SubscriptionCreateManyUserInputEnvelope {

    @Field(() => [SubscriptionCreateManyUserInput], {nullable:false})
    @Type(() => SubscriptionCreateManyUserInput)
    data!: Array<SubscriptionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

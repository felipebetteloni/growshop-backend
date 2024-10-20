import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SubscriptionType } from '../prisma/subscription-type.enum';

@ObjectType()
export class SubscriptionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => SubscriptionType, {nullable:true})
    type?: keyof typeof SubscriptionType;
}

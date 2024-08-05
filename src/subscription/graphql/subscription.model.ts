import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SubscriptionType } from '../prisma/subscription-type.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Subscription {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    endAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => SubscriptionType, {nullable:false,defaultValue:'NORMAL'})
    type!: keyof typeof SubscriptionType;

    @Field(() => User, {nullable:false})
    user?: User;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateWithoutUserInput } from './subscription-create-without-user.input';

@InputType()
export class SubscriptionCreateOrConnectWithoutUserInput {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>;

    @Field(() => SubscriptionCreateWithoutUserInput, {nullable:false})
    @Type(() => SubscriptionCreateWithoutUserInput)
    create!: SubscriptionCreateWithoutUserInput;
}

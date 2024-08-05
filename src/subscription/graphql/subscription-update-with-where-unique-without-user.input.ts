import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { Type } from 'class-transformer';
import { SubscriptionUpdateWithoutUserInput } from './subscription-update-without-user.input';

@InputType()
export class SubscriptionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => SubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => SubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>;

    @Field(() => SubscriptionUpdateWithoutUserInput, {nullable:false})
    @Type(() => SubscriptionUpdateWithoutUserInput)
    data!: SubscriptionUpdateWithoutUserInput;
}

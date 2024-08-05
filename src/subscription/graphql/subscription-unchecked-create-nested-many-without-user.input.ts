import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutUserInput } from './subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutUserInput } from './subscription-create-or-connect-without-user.input';
import { SubscriptionCreateManyUserInputEnvelope } from './subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';

@InputType()
export class SubscriptionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [SubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionCreateWithoutUserInput)
    create?: Array<SubscriptionCreateWithoutUserInput>;

    @Field(() => [SubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => SubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubscriptionCreateManyUserInputEnvelope)
    createMany?: SubscriptionCreateManyUserInputEnvelope;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>>;
}

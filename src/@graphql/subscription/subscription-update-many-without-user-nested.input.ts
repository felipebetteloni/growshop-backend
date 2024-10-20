import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubscriptionCreateWithoutUserInput } from './subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { SubscriptionCreateOrConnectWithoutUserInput } from './subscription-create-or-connect-without-user.input';
import { SubscriptionUpsertWithWhereUniqueWithoutUserInput } from './subscription-upsert-with-where-unique-without-user.input';
import { SubscriptionCreateManyUserInputEnvelope } from './subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubscriptionWhereUniqueInput } from './subscription-where-unique.input';
import { SubscriptionUpdateWithWhereUniqueWithoutUserInput } from './subscription-update-with-where-unique-without-user.input';
import { SubscriptionUpdateManyWithWhereWithoutUserInput } from './subscription-update-many-with-where-without-user.input';
import { SubscriptionScalarWhereInput } from './subscription-scalar-where.input';

@InputType()
export class SubscriptionUpdateManyWithoutUserNestedInput {

    @Field(() => [SubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionCreateWithoutUserInput)
    create?: Array<SubscriptionCreateWithoutUserInput>;

    @Field(() => [SubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => [SubscriptionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SubscriptionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SubscriptionCreateManyUserInputEnvelope)
    createMany?: SubscriptionCreateManyUserInputEnvelope;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [SubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => SubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [SubscriptionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SubscriptionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SubscriptionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SubscriptionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SubscriptionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SubscriptionScalarWhereInput], {nullable:true})
    @Type(() => SubscriptionScalarWhereInput)
    deleteMany?: Array<SubscriptionScalarWhereInput>;
}

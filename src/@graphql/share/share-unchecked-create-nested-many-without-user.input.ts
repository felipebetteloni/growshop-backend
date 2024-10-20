import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateWithoutUserInput } from './share-create-without-user.input';
import { Type } from 'class-transformer';
import { ShareCreateOrConnectWithoutUserInput } from './share-create-or-connect-without-user.input';
import { ShareCreateManyUserInputEnvelope } from './share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';

@InputType()
export class ShareUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ShareCreateWithoutUserInput], {nullable:true})
    @Type(() => ShareCreateWithoutUserInput)
    create?: Array<ShareCreateWithoutUserInput>;

    @Field(() => [ShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShareCreateOrConnectWithoutUserInput>;

    @Field(() => ShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShareCreateManyUserInputEnvelope)
    createMany?: ShareCreateManyUserInputEnvelope;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;
}

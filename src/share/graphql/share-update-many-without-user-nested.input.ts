import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateWithoutUserInput } from './share-create-without-user.input';
import { Type } from 'class-transformer';
import { ShareCreateOrConnectWithoutUserInput } from './share-create-or-connect-without-user.input';
import { ShareUpsertWithWhereUniqueWithoutUserInput } from './share-upsert-with-where-unique-without-user.input';
import { ShareCreateManyUserInputEnvelope } from './share-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { ShareUpdateWithWhereUniqueWithoutUserInput } from './share-update-with-where-unique-without-user.input';
import { ShareUpdateManyWithWhereWithoutUserInput } from './share-update-many-with-where-without-user.input';
import { ShareScalarWhereInput } from './share-scalar-where.input';

@InputType()
export class ShareUpdateManyWithoutUserNestedInput {

    @Field(() => [ShareCreateWithoutUserInput], {nullable:true})
    @Type(() => ShareCreateWithoutUserInput)
    create?: Array<ShareCreateWithoutUserInput>;

    @Field(() => [ShareCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ShareCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ShareCreateOrConnectWithoutUserInput>;

    @Field(() => [ShareUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShareUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ShareUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ShareCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ShareCreateManyUserInputEnvelope)
    createMany?: ShareCreateManyUserInputEnvelope;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;

    @Field(() => [ShareUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ShareUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ShareUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ShareUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ShareUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ShareUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ShareScalarWhereInput], {nullable:true})
    @Type(() => ShareScalarWhereInput)
    deleteMany?: Array<ShareScalarWhereInput>;
}

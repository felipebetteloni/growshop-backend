import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateWithoutProductInput } from './share-create-without-product.input';
import { Type } from 'class-transformer';
import { ShareCreateOrConnectWithoutProductInput } from './share-create-or-connect-without-product.input';
import { ShareUpsertWithWhereUniqueWithoutProductInput } from './share-upsert-with-where-unique-without-product.input';
import { ShareCreateManyProductInputEnvelope } from './share-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { ShareUpdateWithWhereUniqueWithoutProductInput } from './share-update-with-where-unique-without-product.input';
import { ShareUpdateManyWithWhereWithoutProductInput } from './share-update-many-with-where-without-product.input';
import { ShareScalarWhereInput } from './share-scalar-where.input';

@InputType()
export class ShareUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ShareCreateWithoutProductInput], {nullable:true})
    @Type(() => ShareCreateWithoutProductInput)
    create?: Array<ShareCreateWithoutProductInput>;

    @Field(() => [ShareCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ShareCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ShareCreateOrConnectWithoutProductInput>;

    @Field(() => [ShareUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ShareUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ShareUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ShareCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ShareCreateManyProductInputEnvelope)
    createMany?: ShareCreateManyProductInputEnvelope;

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

    @Field(() => [ShareUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ShareUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ShareUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ShareUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ShareUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ShareUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ShareScalarWhereInput], {nullable:true})
    @Type(() => ShareScalarWhereInput)
    deleteMany?: Array<ShareScalarWhereInput>;
}

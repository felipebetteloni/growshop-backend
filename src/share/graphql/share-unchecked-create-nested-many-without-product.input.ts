import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShareCreateWithoutProductInput } from './share-create-without-product.input';
import { Type } from 'class-transformer';
import { ShareCreateOrConnectWithoutProductInput } from './share-create-or-connect-without-product.input';
import { ShareCreateManyProductInputEnvelope } from './share-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';

@InputType()
export class ShareUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ShareCreateWithoutProductInput], {nullable:true})
    @Type(() => ShareCreateWithoutProductInput)
    create?: Array<ShareCreateWithoutProductInput>;

    @Field(() => [ShareCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ShareCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ShareCreateOrConnectWithoutProductInput>;

    @Field(() => ShareCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ShareCreateManyProductInputEnvelope)
    createMany?: ShareCreateManyProductInputEnvelope;

    @Field(() => [ShareWhereUniqueInput], {nullable:true})
    @Type(() => ShareWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>>;
}

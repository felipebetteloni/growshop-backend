import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareCreateWithoutProductInput } from './share-create-without-product.input';

@InputType()
export class ShareCreateOrConnectWithoutProductInput {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareCreateWithoutProductInput, {nullable:false})
    @Type(() => ShareCreateWithoutProductInput)
    create!: ShareCreateWithoutProductInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareUpdateWithoutProductInput } from './share-update-without-product.input';

@InputType()
export class ShareUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareUpdateWithoutProductInput, {nullable:false})
    @Type(() => ShareUpdateWithoutProductInput)
    data!: ShareUpdateWithoutProductInput;
}

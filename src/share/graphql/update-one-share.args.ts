import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareUpdateInput } from './share-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';

@ArgsType()
export class UpdateOneShareArgs {

    @Field(() => ShareUpdateInput, {nullable:false})
    @Type(() => ShareUpdateInput)
    data!: ShareUpdateInput;

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;
}

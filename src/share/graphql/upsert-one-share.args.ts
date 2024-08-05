import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';
import { ShareCreateInput } from './share-create.input';
import { ShareUpdateInput } from './share-update.input';

@ArgsType()
export class UpsertOneShareArgs {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => ShareCreateInput, {nullable:false})
    @Type(() => ShareCreateInput)
    create!: ShareCreateInput;

    @Field(() => ShareUpdateInput, {nullable:false})
    @Type(() => ShareUpdateInput)
    update!: ShareUpdateInput;
}

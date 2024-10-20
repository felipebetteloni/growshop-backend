import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueShareArgs {

    @Field(() => ShareWhereUniqueInput, {nullable:false})
    @Type(() => ShareWhereUniqueInput)
    where!: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;
}

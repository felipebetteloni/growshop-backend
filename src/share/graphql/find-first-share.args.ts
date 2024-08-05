import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShareWhereInput } from './share-where.input';
import { Type } from 'class-transformer';
import { ShareOrderByWithRelationInput } from './share-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShareWhereUniqueInput } from './share-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShareScalarFieldEnum } from './share-scalar-field.enum';

@ArgsType()
export class FindFirstShareArgs {

    @Field(() => ShareWhereInput, {nullable:true})
    @Type(() => ShareWhereInput)
    where?: ShareWhereInput;

    @Field(() => [ShareOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShareOrderByWithRelationInput>;

    @Field(() => ShareWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ShareWhereUniqueInput, 'userId_productId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShareScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShareScalarFieldEnum>;
}

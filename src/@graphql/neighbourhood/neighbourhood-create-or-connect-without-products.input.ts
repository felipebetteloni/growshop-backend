import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateWithoutProductsInput } from './neighbourhood-create-without-products.input';

@InputType()
export class NeighbourhoodCreateOrConnectWithoutProductsInput {

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:false})
    @Type(() => NeighbourhoodWhereUniqueInput)
    where!: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => NeighbourhoodCreateWithoutProductsInput, {nullable:false})
    @Type(() => NeighbourhoodCreateWithoutProductsInput)
    create!: NeighbourhoodCreateWithoutProductsInput;
}

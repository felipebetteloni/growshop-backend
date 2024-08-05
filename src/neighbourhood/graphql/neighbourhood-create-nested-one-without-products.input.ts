import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateWithoutProductsInput } from './neighbourhood-create-without-products.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateOrConnectWithoutProductsInput } from './neighbourhood-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';

@InputType()
export class NeighbourhoodCreateNestedOneWithoutProductsInput {

    @Field(() => NeighbourhoodCreateWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodCreateWithoutProductsInput)
    create?: NeighbourhoodCreateWithoutProductsInput;

    @Field(() => NeighbourhoodCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodCreateOrConnectWithoutProductsInput)
    connectOrCreate?: NeighbourhoodCreateOrConnectWithoutProductsInput;

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    connect?: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;
}

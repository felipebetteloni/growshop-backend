import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NeighbourhoodCreateWithoutProductsInput } from './neighbourhood-create-without-products.input';
import { Type } from 'class-transformer';
import { NeighbourhoodCreateOrConnectWithoutProductsInput } from './neighbourhood-create-or-connect-without-products.input';
import { NeighbourhoodUpsertWithoutProductsInput } from './neighbourhood-upsert-without-products.input';
import { NeighbourhoodWhereInput } from './neighbourhood-where.input';
import { Prisma } from '@prisma/client';
import { NeighbourhoodWhereUniqueInput } from './neighbourhood-where-unique.input';
import { NeighbourhoodUpdateToOneWithWhereWithoutProductsInput } from './neighbourhood-update-to-one-with-where-without-products.input';

@InputType()
export class NeighbourhoodUpdateOneWithoutProductsNestedInput {

    @Field(() => NeighbourhoodCreateWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodCreateWithoutProductsInput)
    create?: NeighbourhoodCreateWithoutProductsInput;

    @Field(() => NeighbourhoodCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodCreateOrConnectWithoutProductsInput)
    connectOrCreate?: NeighbourhoodCreateOrConnectWithoutProductsInput;

    @Field(() => NeighbourhoodUpsertWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodUpsertWithoutProductsInput)
    upsert?: NeighbourhoodUpsertWithoutProductsInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    disconnect?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodWhereInput, {nullable:true})
    @Type(() => NeighbourhoodWhereInput)
    delete?: NeighbourhoodWhereInput;

    @Field(() => NeighbourhoodWhereUniqueInput, {nullable:true})
    @Type(() => NeighbourhoodWhereUniqueInput)
    connect?: Prisma.AtLeast<NeighbourhoodWhereUniqueInput, 'id'>;

    @Field(() => NeighbourhoodUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => NeighbourhoodUpdateToOneWithWhereWithoutProductsInput)
    update?: NeighbourhoodUpdateToOneWithWhereWithoutProductsInput;
}

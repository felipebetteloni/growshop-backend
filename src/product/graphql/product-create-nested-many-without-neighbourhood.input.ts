import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutNeighbourhoodInput } from './product-create-without-neighbourhood.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutNeighbourhoodInput } from './product-create-or-connect-without-neighbourhood.input';
import { ProductCreateManyNeighbourhoodInputEnvelope } from './product-create-many-neighbourhood-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutNeighbourhoodInput {

    @Field(() => [ProductCreateWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductCreateWithoutNeighbourhoodInput)
    create?: Array<ProductCreateWithoutNeighbourhoodInput>;

    @Field(() => [ProductCreateOrConnectWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutNeighbourhoodInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutNeighbourhoodInput>;

    @Field(() => ProductCreateManyNeighbourhoodInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyNeighbourhoodInputEnvelope)
    createMany?: ProductCreateManyNeighbourhoodInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

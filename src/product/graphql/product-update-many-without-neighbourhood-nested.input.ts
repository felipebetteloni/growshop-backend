import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutNeighbourhoodInput } from './product-create-without-neighbourhood.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutNeighbourhoodInput } from './product-create-or-connect-without-neighbourhood.input';
import { ProductUpsertWithWhereUniqueWithoutNeighbourhoodInput } from './product-upsert-with-where-unique-without-neighbourhood.input';
import { ProductCreateManyNeighbourhoodInputEnvelope } from './product-create-many-neighbourhood-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutNeighbourhoodInput } from './product-update-with-where-unique-without-neighbourhood.input';
import { ProductUpdateManyWithWhereWithoutNeighbourhoodInput } from './product-update-many-with-where-without-neighbourhood.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutNeighbourhoodNestedInput {

    @Field(() => [ProductCreateWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductCreateWithoutNeighbourhoodInput)
    create?: Array<ProductCreateWithoutNeighbourhoodInput>;

    @Field(() => [ProductCreateOrConnectWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutNeighbourhoodInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutNeighbourhoodInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutNeighbourhoodInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutNeighbourhoodInput>;

    @Field(() => ProductCreateManyNeighbourhoodInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyNeighbourhoodInputEnvelope)
    createMany?: ProductCreateManyNeighbourhoodInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutNeighbourhoodInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutNeighbourhoodInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutNeighbourhoodInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutNeighbourhoodInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutNeighbourhoodInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

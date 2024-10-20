import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCityInput } from './product-create-without-city.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCityInput } from './product-create-or-connect-without-city.input';
import { ProductUpsertWithWhereUniqueWithoutCityInput } from './product-upsert-with-where-unique-without-city.input';
import { ProductCreateManyCityInputEnvelope } from './product-create-many-city-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutCityInput } from './product-update-with-where-unique-without-city.input';
import { ProductUpdateManyWithWhereWithoutCityInput } from './product-update-many-with-where-without-city.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutCityNestedInput {

    @Field(() => [ProductCreateWithoutCityInput], {nullable:true})
    @Type(() => ProductCreateWithoutCityInput)
    create?: Array<ProductCreateWithoutCityInput>;

    @Field(() => [ProductCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCityInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => ProductCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCityInputEnvelope)
    createMany?: ProductCreateManyCityInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

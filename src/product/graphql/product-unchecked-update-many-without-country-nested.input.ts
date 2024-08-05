import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCountryInput } from './product-create-without-country.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCountryInput } from './product-create-or-connect-without-country.input';
import { ProductUpsertWithWhereUniqueWithoutCountryInput } from './product-upsert-with-where-unique-without-country.input';
import { ProductCreateManyCountryInputEnvelope } from './product-create-many-country-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutCountryInput } from './product-update-with-where-unique-without-country.input';
import { ProductUpdateManyWithWhereWithoutCountryInput } from './product-update-many-with-where-without-country.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutCountryNestedInput {

    @Field(() => [ProductCreateWithoutCountryInput], {nullable:true})
    @Type(() => ProductCreateWithoutCountryInput)
    create?: Array<ProductCreateWithoutCountryInput>;

    @Field(() => [ProductCreateOrConnectWithoutCountryInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutCountryInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutCountryInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutCountryInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutCountryInput>;

    @Field(() => ProductCreateManyCountryInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyCountryInputEnvelope)
    createMany?: ProductCreateManyCountryInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutCountryInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutCountryInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutCountryInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutCountryInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutCountryInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutCountryInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}

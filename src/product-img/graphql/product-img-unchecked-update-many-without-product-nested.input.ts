import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgCreateWithoutProductInput } from './product-img-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductImgCreateOrConnectWithoutProductInput } from './product-img-create-or-connect-without-product.input';
import { ProductImgUpsertWithWhereUniqueWithoutProductInput } from './product-img-upsert-with-where-unique-without-product.input';
import { ProductImgCreateManyProductInputEnvelope } from './product-img-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { ProductImgUpdateWithWhereUniqueWithoutProductInput } from './product-img-update-with-where-unique-without-product.input';
import { ProductImgUpdateManyWithWhereWithoutProductInput } from './product-img-update-many-with-where-without-product.input';
import { ProductImgScalarWhereInput } from './product-img-scalar-where.input';

@InputType()
export class ProductImgUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductImgCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductImgCreateWithoutProductInput)
    create?: Array<ProductImgCreateWithoutProductInput>;

    @Field(() => [ProductImgCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductImgCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductImgCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductImgUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductImgUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductImgUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductImgCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductImgCreateManyProductInputEnvelope)
    createMany?: ProductImgCreateManyProductInputEnvelope;

    @Field(() => [ProductImgWhereUniqueInput], {nullable:true})
    @Type(() => ProductImgWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImgWhereUniqueInput], {nullable:true})
    @Type(() => ProductImgWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImgWhereUniqueInput], {nullable:true})
    @Type(() => ProductImgWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImgWhereUniqueInput], {nullable:true})
    @Type(() => ProductImgWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>>;

    @Field(() => [ProductImgUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductImgUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductImgUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductImgUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductImgUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductImgUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductImgScalarWhereInput], {nullable:true})
    @Type(() => ProductImgScalarWhereInput)
    deleteMany?: Array<ProductImgScalarWhereInput>;
}

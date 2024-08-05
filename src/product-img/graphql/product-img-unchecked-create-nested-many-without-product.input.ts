import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductImgCreateWithoutProductInput } from './product-img-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductImgCreateOrConnectWithoutProductInput } from './product-img-create-or-connect-without-product.input';
import { ProductImgCreateManyProductInputEnvelope } from './product-img-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';

@InputType()
export class ProductImgUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductImgCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductImgCreateWithoutProductInput)
    create?: Array<ProductImgCreateWithoutProductInput>;

    @Field(() => [ProductImgCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductImgCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductImgCreateOrConnectWithoutProductInput>;

    @Field(() => ProductImgCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductImgCreateManyProductInputEnvelope)
    createMany?: ProductImgCreateManyProductInputEnvelope;

    @Field(() => [ProductImgWhereUniqueInput], {nullable:true})
    @Type(() => ProductImgWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImgUpdateWithoutProductInput } from './product-img-update-without-product.input';
import { ProductImgCreateWithoutProductInput } from './product-img-create-without-product.input';

@InputType()
export class ProductImgUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductImgWhereUniqueInput, {nullable:false})
    @Type(() => ProductImgWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;

    @Field(() => ProductImgUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductImgUpdateWithoutProductInput)
    update!: ProductImgUpdateWithoutProductInput;

    @Field(() => ProductImgCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductImgCreateWithoutProductInput)
    create!: ProductImgCreateWithoutProductInput;
}

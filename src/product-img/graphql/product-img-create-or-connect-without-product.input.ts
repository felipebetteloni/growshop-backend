import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImgCreateWithoutProductInput } from './product-img-create-without-product.input';

@InputType()
export class ProductImgCreateOrConnectWithoutProductInput {

    @Field(() => ProductImgWhereUniqueInput, {nullable:false})
    @Type(() => ProductImgWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;

    @Field(() => ProductImgCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductImgCreateWithoutProductInput)
    create!: ProductImgCreateWithoutProductInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgWhereInput } from './product-img-where.input';
import { Type } from 'class-transformer';
import { ProductImgOrderByWithRelationInput } from './product-img-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductImgScalarFieldEnum } from './product-img-scalar-field.enum';

@ArgsType()
export class FindFirstProductImgArgs {

    @Field(() => ProductImgWhereInput, {nullable:true})
    @Type(() => ProductImgWhereInput)
    where?: ProductImgWhereInput;

    @Field(() => [ProductImgOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductImgOrderByWithRelationInput>;

    @Field(() => ProductImgWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductImgScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductImgScalarFieldEnum>;
}

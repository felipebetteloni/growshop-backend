import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { Type } from 'class-transformer';
import { ProductImgCreateInput } from './product-img-create.input';
import { ProductImgUpdateInput } from './product-img-update.input';

@ArgsType()
export class UpsertOneProductImgArgs {

    @Field(() => ProductImgWhereUniqueInput, {nullable:false})
    @Type(() => ProductImgWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;

    @Field(() => ProductImgCreateInput, {nullable:false})
    @Type(() => ProductImgCreateInput)
    create!: ProductImgCreateInput;

    @Field(() => ProductImgUpdateInput, {nullable:false})
    @Type(() => ProductImgUpdateInput)
    update!: ProductImgUpdateInput;
}

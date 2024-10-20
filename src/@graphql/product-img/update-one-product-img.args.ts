import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductImgUpdateInput } from './product-img-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';

@ArgsType()
export class UpdateOneProductImgArgs {

    @Field(() => ProductImgUpdateInput, {nullable:false})
    @Type(() => ProductImgUpdateInput)
    data!: ProductImgUpdateInput;

    @Field(() => ProductImgWhereUniqueInput, {nullable:false})
    @Type(() => ProductImgWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;
}

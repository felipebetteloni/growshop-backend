import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductImgWhereUniqueInput } from './product-img-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductImgArgs {

    @Field(() => ProductImgWhereUniqueInput, {nullable:false})
    @Type(() => ProductImgWhereUniqueInput)
    where!: Prisma.AtLeast<ProductImgWhereUniqueInput, 'id'>;
}

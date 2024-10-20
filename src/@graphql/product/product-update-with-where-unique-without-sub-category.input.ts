import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSub_categoryInput } from './product-update-without-sub-category.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutSub_categoryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutSub_categoryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSub_categoryInput)
    data!: ProductUpdateWithoutSub_categoryInput;
}

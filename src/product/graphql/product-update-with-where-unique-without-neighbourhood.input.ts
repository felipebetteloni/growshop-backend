import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutNeighbourhoodInput } from './product-update-without-neighbourhood.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutNeighbourhoodInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => ProductUpdateWithoutNeighbourhoodInput)
    data!: ProductUpdateWithoutNeighbourhoodInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutNeighbourhoodInput } from './product-create-without-neighbourhood.input';

@InputType()
export class ProductCreateOrConnectWithoutNeighbourhoodInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutNeighbourhoodInput, {nullable:false})
    @Type(() => ProductCreateWithoutNeighbourhoodInput)
    create!: ProductCreateWithoutNeighbourhoodInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCityInput } from './product-update-without-city.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCityInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCityInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCityInput)
    data!: ProductUpdateWithoutCityInput;
}

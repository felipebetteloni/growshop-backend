import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCountryInput } from './product-update-without-country.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCountryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCountryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCountryInput)
    data!: ProductUpdateWithoutCountryInput;
}

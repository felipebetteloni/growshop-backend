import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCountryInput } from './product-update-without-country.input';
import { ProductCreateWithoutCountryInput } from './product-create-without-country.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutCountryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutCountryInput, {nullable:false})
    @Type(() => ProductUpdateWithoutCountryInput)
    update!: ProductUpdateWithoutCountryInput;

    @Field(() => ProductCreateWithoutCountryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCountryInput)
    create!: ProductCreateWithoutCountryInput;
}

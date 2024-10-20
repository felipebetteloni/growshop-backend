import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCountryInput } from './product-create-without-country.input';

@InputType()
export class ProductCreateOrConnectWithoutCountryInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutCountryInput, {nullable:false})
    @Type(() => ProductCreateWithoutCountryInput)
    create!: ProductCreateWithoutCountryInput;
}

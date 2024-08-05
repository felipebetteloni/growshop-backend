import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutProductsInput } from './country-create-without-products.input';

@InputType()
export class CountryCreateOrConnectWithoutProductsInput {

    @Field(() => CountryWhereUniqueInput, {nullable:false})
    @Type(() => CountryWhereUniqueInput)
    where!: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;

    @Field(() => CountryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CountryCreateWithoutProductsInput)
    create!: CountryCreateWithoutProductsInput;
}

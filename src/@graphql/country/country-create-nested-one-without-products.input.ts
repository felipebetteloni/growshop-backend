import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutProductsInput } from './country-create-without-products.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutProductsInput } from './country-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';

@InputType()
export class CountryCreateNestedOneWithoutProductsInput {

    @Field(() => CountryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CountryCreateWithoutProductsInput)
    create?: CountryCreateWithoutProductsInput;

    @Field(() => CountryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CountryCreateOrConnectWithoutProductsInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;
}

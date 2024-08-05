import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutProductsInput } from './country-create-without-products.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutProductsInput } from './country-create-or-connect-without-products.input';
import { CountryUpsertWithoutProductsInput } from './country-upsert-without-products.input';
import { CountryWhereInput } from './country-where.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateToOneWithWhereWithoutProductsInput } from './country-update-to-one-with-where-without-products.input';

@InputType()
export class CountryUpdateOneWithoutProductsNestedInput {

    @Field(() => CountryCreateWithoutProductsInput, {nullable:true})
    @Type(() => CountryCreateWithoutProductsInput)
    create?: CountryCreateWithoutProductsInput;

    @Field(() => CountryCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutProductsInput)
    connectOrCreate?: CountryCreateOrConnectWithoutProductsInput;

    @Field(() => CountryUpsertWithoutProductsInput, {nullable:true})
    @Type(() => CountryUpsertWithoutProductsInput)
    upsert?: CountryUpsertWithoutProductsInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    disconnect?: CountryWhereInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    delete?: CountryWhereInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id'>;

    @Field(() => CountryUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => CountryUpdateToOneWithWhereWithoutProductsInput)
    update?: CountryUpdateToOneWithWhereWithoutProductsInput;
}

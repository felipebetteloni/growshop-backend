import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutProductsInput } from './country-update-without-products.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutProductsInput } from './country-create-without-products.input';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryUpsertWithoutProductsInput {

    @Field(() => CountryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CountryUpdateWithoutProductsInput)
    update!: CountryUpdateWithoutProductsInput;

    @Field(() => CountryCreateWithoutProductsInput, {nullable:false})
    @Type(() => CountryCreateWithoutProductsInput)
    create!: CountryCreateWithoutProductsInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}

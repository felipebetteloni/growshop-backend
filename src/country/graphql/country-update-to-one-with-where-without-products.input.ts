import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryUpdateWithoutProductsInput } from './country-update-without-products.input';

@InputType()
export class CountryUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => CountryUpdateWithoutProductsInput, {nullable:false})
    @Type(() => CountryUpdateWithoutProductsInput)
    data!: CountryUpdateWithoutProductsInput;
}

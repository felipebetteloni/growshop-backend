import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCountryInput } from '../product/product-create-nested-many-without-country.input';

@InputType()
export class CountryCreateWithoutStatesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductCreateNestedManyWithoutCountryInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCountryInput;
}

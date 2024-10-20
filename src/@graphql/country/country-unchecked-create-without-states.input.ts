import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCountryInput } from '../product/product-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateWithoutStatesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCountryInput;
}

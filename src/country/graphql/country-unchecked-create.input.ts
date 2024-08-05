import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateUncheckedCreateNestedManyWithoutCountryInput } from '../state/state-unchecked-create-nested-many-without-country.input';
import { ProductUncheckedCreateNestedManyWithoutCountryInput } from '../product/product-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => StateUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    states?: StateUncheckedCreateNestedManyWithoutCountryInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCountryInput;
}

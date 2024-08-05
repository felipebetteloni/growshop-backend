import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateUncheckedCreateNestedManyWithoutCountryInput } from '../state/state-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => StateUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    states?: StateUncheckedCreateNestedManyWithoutCountryInput;
}

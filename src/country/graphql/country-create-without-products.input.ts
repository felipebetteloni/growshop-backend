import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StateCreateNestedManyWithoutCountryInput } from '../state/state-create-nested-many-without-country.input';

@InputType()
export class CountryCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => StateCreateNestedManyWithoutCountryInput, {nullable:true})
    states?: StateCreateNestedManyWithoutCountryInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateNestedOneWithoutStatesInput } from '../country/country-create-nested-one-without-states.input';
import { ProductCreateNestedManyWithoutStateInput } from '../product/product-create-nested-many-without-state.input';

@InputType()
export class StateCreateWithoutCitiesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryCreateNestedOneWithoutStatesInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutStatesInput;

    @Field(() => ProductCreateNestedManyWithoutStateInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutStateInput;
}

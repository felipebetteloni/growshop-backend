import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateNestedOneWithoutStatesInput } from '../country/country-create-nested-one-without-states.input';
import { CityCreateNestedManyWithoutStateInput } from '../city/city-create-nested-many-without-state.input';
import { ProductCreateNestedManyWithoutStateInput } from '../product/product-create-nested-many-without-state.input';

@InputType()
export class StateCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CountryCreateNestedOneWithoutStatesInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutStatesInput;

    @Field(() => CityCreateNestedManyWithoutStateInput, {nullable:true})
    cities?: CityCreateNestedManyWithoutStateInput;

    @Field(() => ProductCreateNestedManyWithoutStateInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutStateInput;
}

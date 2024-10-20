import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUncheckedCreateNestedManyWithoutStateInput } from '../city/city-unchecked-create-nested-many-without-state.input';

@InputType()
export class StateUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => CityUncheckedCreateNestedManyWithoutStateInput, {nullable:true})
    cities?: CityUncheckedCreateNestedManyWithoutStateInput;
}

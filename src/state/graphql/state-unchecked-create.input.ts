import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUncheckedCreateNestedManyWithoutStateInput } from '../city/city-unchecked-create-nested-many-without-state.input';
import { ProductUncheckedCreateNestedManyWithoutStateInput } from '../product/product-unchecked-create-nested-many-without-state.input';

@InputType()
export class StateUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    countryId!: string;

    @Field(() => CityUncheckedCreateNestedManyWithoutStateInput, {nullable:true})
    cities?: CityUncheckedCreateNestedManyWithoutStateInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutStateInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutStateInput;
}

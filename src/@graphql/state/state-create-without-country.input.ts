import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedManyWithoutStateInput } from '../city/city-create-nested-many-without-state.input';
import { ProductCreateNestedManyWithoutStateInput } from '../product/product-create-nested-many-without-state.input';

@InputType()
export class StateCreateWithoutCountryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedManyWithoutStateInput, {nullable:true})
    cities?: CityCreateNestedManyWithoutStateInput;

    @Field(() => ProductCreateNestedManyWithoutStateInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutStateInput;
}
